<template>
  <v-main>
    <v-container fluid>
      <v-card class="mx-auto" tile>
        <v-img height="200" src="https://voenkor2002.ru/static/img/home.jpg" style="overflow: hidden"></v-img>
        <v-row style="margin:2.5%;position:absolute; top: 130px">

          <v-list-item>
            <v-list-item-avatar size="100">
              <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="John"
              >
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title" style="margin-top:20px;">{{ this.$store.state.user.email }}</v-list-item-title>
              <v-list-item-subtitle>{{ this.$store.state.user.role}} | dokanee</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-row>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "PageUser"
}
</script>

<style scoped>

</style>