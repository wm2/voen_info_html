import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/styles/app.scss";
import VueCoreVideoPlayer from 'vue-core-video-player'


const kr = {
    "dashboard" : {
        "btn": {
            "play": "Play",
            "pause": "Пауза",
            "fullscreen": "Весь экран",
            "exitFullscreen": "Exit Full Screen",
            "mute": "Mute",
            "unmute": "Unmute",
            "back": "назад",
            "pip": "Picture-in-Picture"
        },
        "settings" : {
            "autoplay": "Автоплей",
            "loop": "Loop",
            "speed": "Скорость",
            "resolution": "Resolution"
        }
    },
    "layers": {
        "error": {
            "title": "ошибка !",
            "2404": "Video Source Not Found",
            "2502": "Media Network Error",
            "2503": "Video Cannot DECODE",
            "2504": "Video Cannot Play!"
        },
        "loading": {
            "msg": "Loading ..."
        }
    }
}


  Vue.use(VueCoreVideoPlayer, {
    lang: kr
  })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
