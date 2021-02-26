<template>
  <div>
    <p>Имя: {{editedItem.name}}</p>
    <p>Фамилия: {{editedItem.surname}}</p>
    <button @click="reset">Reset</button></div>
</template>

<script>
export default {
name: "Test2",
  props: {
    editedItem: {
      name: {
        type: String
      },
      surname: {
        type: String
      }
    }
  },
  methods:{
    reset(){
      this.$emit("userreset");
    }
  }
}
</script>

<style scoped>

</style>