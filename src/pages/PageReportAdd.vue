<template>
  <v-main>
    <v-container fluid>
      <AddReportForm
          @save="addItemToReports"
      />
    </v-container>
  </v-main>
</template>

<script>
import AddReportForm from "@/forms/AddReportForm";
export default {
name: "PageReportAdd",
  components: {
    AddReportForm
  },
  data () {
    return {
      reports: []
    }
  },
  methods: {
    addItemToReports (editedItem) {
      console.log(editedItem)
      this.reports.push(editedItem)
    }
  }
}
</script>

<style scoped>

</style>