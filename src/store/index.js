import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
if (localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
}

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    refresh: localStorage.getItem('refresh') || '',
    user: JSON.parse(localStorage.getItem('user')) || {},
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, access_token, refresh_token) {
      state.status = 'success'
      state.token = access_token
      state.refresh = refresh_token
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
    user(state, user) {
      state.user = user
    }
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: process.env.VUE_APP_BACKENDURL + '/api/token/', data: user, method: 'POST'})
            .then(resp => {
              console.log(resp.data.data)
              const access_token = resp.data.data.access
              const refresh_token = resp.data.data.refresh
              localStorage.setItem('refresh', refresh_token)
              localStorage.setItem('token', access_token)
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
              commit('auth_success', access_token, refresh_token)
              console.log(access_token, refresh_token)
              axios({url: process.env.VUE_APP_BACKENDURL + '/api/v1/users/me/', method: 'GET'})
                  .then(resp => {
                    const user = resp.data.data
                    // console.log(user)
                    localStorage.setItem('user', JSON.stringify(user))
                    commit('user', user)
                  })
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
      })
    },
    logout({commit}) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('refresh')
        localStorage.removeItem('user')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  modules: {},
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user,
  }
})
