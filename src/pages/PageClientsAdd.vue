<template>
  <v-main>
    <v-container fluid>

      <ClientsDataTable
          :clients="clients"
      />
      <v-btn color="success" class="mr-4" @click.prevent="createDeal">Отправить</v-btn>
      <hr>
      <AddClient
          @save="addItemToClients"
      />
    </v-container>
  </v-main>
</template>

<script>
import AddClient from "@/forms/AddClient";
import ClientsDataTable from "@/components/ClientsDataTable";

export default {
  name: "PageClientsAdd",
  props: {
    report_id: {
      type: String
    }
  },
  data() {
    return {
      clients: []
    }
  },
  components: {
    ClientsDataTable,
    AddClient
  },
  methods: {
    addItemToClients(client) {
      this.clients.push(client)
    },
    createDeal () {
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