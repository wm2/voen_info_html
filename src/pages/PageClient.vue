<template>
  <v-main>
    <v-container fluid>
      <v-card>
        <v-card-title>
          <a @click="back">
            <v-icon left>
              mdi-arrow-left
            </v-icon>
          </a>
          <v-row>
            <v-list-item>
              <v-list-item-avatar size="100">
                <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="John"
                >
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="title" style="margin-top:20px;">{{ this.client.surname }} {{
                    this.client.name
                  }} {{ this.client.patronymic }}
                </v-list-item-title>
                <v-list-item-subtitle><a href="tel:'`${this.client.phone}`">+{{ this.client.phone }}</a> | dokanee
                </v-list-item-subtitle>
                <v-list-item-subtitle> Дата съемки: 2020-10-20 | Дата убытия: {{ client.departure | formatDateGrip }}
                </v-list-item-subtitle>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-row>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-tabs>
                <v-tab>
                  <v-icon left>
                    mdi-information-outline
                  </v-icon>
                  Клиент
                </v-tab>
                <v-tab>
                  <v-icon left>
                    mdi-home
                  </v-icon>
                  Адреса
                </v-tab>
                <v-tab>
                  <v-icon left>
                    mdi-account
                  </v-icon>
                  Семья
                </v-tab>
                <v-tab-item>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <CardClientInfo
                            :client="client"
                            :key="client.id"

                        />
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-tab-item>
                <v-tab-item>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <CardClientAddress v-for="address in client.address"
                                           :address="address"
                                           :key="address.id"
                        />
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-tab-item>
                <v-tab-item>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <CardClientFamily v-for="family in client.family"
                                          :family="family"
                                          :key="family.id"
                        />
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-tab-item>
              </v-tabs>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import CardClientInfo from "@/cards/CardClientInfo";
import CardClientAddress from "@/cards/CardClientAddress";
import CardClientFamily from "@/cards/CardClientFamily";

export default {
  name: "PageClient",
  components: {CardClientFamily, CardClientAddress, CardClientInfo},
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      client: {}
    }
  },
  mounted() {
    this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/client/' + this.id + '/').then(response => {
      this.client = response.data.data

    })
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>