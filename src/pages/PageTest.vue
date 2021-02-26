<template>
  <v-main>
    <v-container fluid>
      <h2>User</h2>
      <Test1 :editedItem="editedItem" @userchange="change"></Test1>
      <Test2 :editedItem="editedItem" @userreset="reset"></Test2>
    </v-container>
  </v-main>
</template>

<script>
import Test2 from "@/components/Test2";
import Test1 from "@/components/Test1";

export default {
  name: "PageTest",
  components: {Test1, Test2},
  data() {
    return {
      editedItem: {
        name: "Tom",
        surname: "surname",
      }
    }
  },
  methods: {
    change(editedItem) {
      this.editedItem = editedItem
    },
    reset() {
      this.editedItem = {
        name: "Tom",
        surname: "surname",
      }
    }
  }
}
</script>

<style scoped>

</style>