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
          Сделка: {{ deal.id }}
          <v-spacer></v-spacer>
          {{ deal.created_at | formatDateGrip }}
<!--          {{ deal.status }}-->
        </v-card-title>
        <v-row>
          <v-col>
            <v-col>
              <p v-if="deal.client_id">
                <router-link class="v-btn" :to="{name: 'Client', params: {id: deal.client_id }}">Клиент</router-link>
              </p>
              <p v-if="deal.order_id">
<!--                <router-link class="v-btn" :to="{name: 'Client', params: {id: deal.order_id }}">Заказ</router-link>-->
              </p>
              <p v-if="deal.report_id">
                <router-link class="v-btn" :to="{name: 'PageReport', params: {id: deal.report_id }}">Отчет</router-link>
              </p>
            </v-col>
          </v-col>
          <v-col>
            <v-col>
              <p>
                Сумма: {{ deal.amount }}
              </p>
              <p>
                Скидка: {{ deal.sale }}
              </p>
            </v-col>
          </v-col>
        </v-row>
        <v-tabs>
          <v-tab>
            Клиент
          </v-tab>
          <v-tab>
            Заказ
          </v-tab>
          <v-tab>
            Адрес
          </v-tab>
          <v-tab-item>
            <v-card-text>
              <v-row>
                <v-col>
<!--                  Todo: тут ошибка!!!!!!!!!! хз почему-->
                  <CardClientInfo
                      :client="deal.client"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-row>
                <v-col>
                  {{ deal.order_id }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-row>
                <v-col>
                  <CardClientAddress
                    :address="deal.address"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import CardClientAddress from "@/cards/CardClientAddress";
import CardClientInfo from "@/cards/CardClientInfo";
export default {
  name: "PageDeal",
  components: {CardClientInfo, CardClientAddress},
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      deal: {}
    }
  },
  mounted() {
    this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/deal/' + this.id + '/').then(response => {
      this.deal = response.data.data

    })
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>

</style>