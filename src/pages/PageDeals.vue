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
          Сделки
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <CardDeal
                  @openDeal="openDetail"
                  v-for="deal in deals"
                  :deal="deal"
                  :key="deal.id"

              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import CardDeal from "@/cards/CardDeal";
export default {
  name: "PageDeals",
  components: {CardDeal},
  data() {
    return {
      deals: {}
    }
  },
  mounted() {
    // this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/deal/' + this.id + '/').then(response => {
    //   this.report = response.data.data
    //
    // })
    this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/deal/').then(response => {
      this.deals = response.data.data

    })
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    openDetail(item) {
      console.log(item.id)
      this.$router.push('/crm/deals/' + item.id)
    }
  }
}
</script>

<style scoped>

</style>