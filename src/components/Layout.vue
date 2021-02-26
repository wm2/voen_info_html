<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
        clipped
    >
      <TheNavBar/>
    </v-navigation-drawer>
    <v-app-bar
        app
        clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><a to="/">Voenkor</a></v-toolbar-title>
      <template v-if="isLoggedIn">
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text
                   color="primary"
                   dark
                   v-bind="attrs"
                   v-on="on"
            >
              <v-avatar>
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                >
              </v-avatar>
              <span>
<!--          <a @click="logout">-->
            {{ user.email }}
                <!--          </a>-->
        </span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <!--                v-for="(item, index) in items"-->
              <!--                :key="index"-->
              <!--            >-->
              <v-list-item-title>
                <router-link class="v-btn" to="/user/me">Profile</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="logout">LogOut</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
    <router-view/>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

import TheNavBar from "@/components/TheNavBar";

export default {
  name: "Layout",
  props: {
    source: String,
  },
  components: {
      TheNavBar
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/crm')
          })
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    },
    user() {
      return this.$store.state.user
    }
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true
  },
}
</script>

<style scoped>

</style>