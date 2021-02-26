<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item-content
          v-bind="attrs"
          v-on="on"
          @click="getClients">
        <v-btn color="success">+ Клиенты</v-btn>
      </v-list-item-content>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">+ Клиенты</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form
              ref="form"
              lazy-validation
          >
            <!--            {{clients}}-->
            <v-autocomplete
                v-model="client_id"
                :search-input.sync="q"
                :items="clients"
                filled
                color="blue-grey lighten-2"
                label="Клиенты"
                :item-text="selectedClients"
                item-value="id"
                @change="changeClients"
            ></v-autocomplete>
            <!--            <v-file-input-->
            <!--                v-model="files"-->
            <!--                color="deep-purple accent-4"-->
            <!--                counter-->
            <!--                multiple-->
            <!--                placeholder="Нарезки"-->
            <!--                prepend-icon="mdi-paperclip"-->
            <!--                outlined-->
            <!--                :show-size="1000"-->
            <!--            >-->
            <!--              <template v-slot:selection="{ index, text }">-->
            <!--                <v-chip-->
            <!--                    v-if="index < 2"-->
            <!--                    color="deep-purple accent-4"-->
            <!--                    dark-->
            <!--                    label-->
            <!--                    small-->
            <!--                >-->
            <!--                  {{ text }}-->
            <!--                </v-chip>-->

            <!--                <span-->
            <!--                    v-else-if="index === 2"-->
            <!--                    class="overline grey&#45;&#45;text text&#45;&#45;darken-3 mx-2"-->
            <!--                >-->
            <!--          +{{ files.length - 2 }} File(s)-->
            <!--        </span>-->
            <!--              </template>-->
            <!--            </v-file-input>-->
          </v-form>

        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" class="mr-4" @click="cancel">Отмена</v-btn>
        <v-btn color="success" class="mr-4" @click="send">Добавить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddClientToVideoReport",
  data() {
    return {
      q: '',
      clients: [],
      dialog: false,
      client_id: ''
    }
  },
  props: {
    report_id: {
      type: String
    }
  },
  watch: {
    q() {
      let url = process.env.VUE_APP_BACKENDURL + '/api/v1/client/'

          // ?search=' + input
      // if (input != null) {
      //   url = url + '
      // }
      this.axios.get(url)
          .then(response => {
            this.clients = response.data.data
          })
    }
  },
  methods: {
    send() {
      this.axios.post(process.env.VUE_APP_BACKENDURL + '/api/v1/video_reports/' + this.report_id + '/client/' + this.client_id + '/')
          .then(response => {
            this.dialog = false
            this.$emit('push', this.client_id)
            console.log(response)
          })
    },
    selectedClients(item) {
      return item.surname + ' ' + item.name + ' ' + item.patronymic
    },
    changeClients(item) {
      this.client_id = item
    },
    getClients() {
      this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/client/').then(response => {
        this.clients = response.data.data

      })
    },
    cancel() {
      this.dialog = false
    },
    addItemToClients(client) {
      this.clients.push(client)
    },
    createDeal() {
      this.axios.post(process.env.VUE_APP_BACKENDURL + '/api/v1/deal/report/' + this.report_id + '/', this.clients)
          .then(response => {
            console.log(response)
          })
    }
  },
}
</script>

<style scoped>

</style>


