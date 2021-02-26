<template>
  <div>
    <v-col>
      <v-row>
        Создан: {{ family.created_at | formatDateGrip}}
      </v-row>
      <v-row>
        {{ family.relation }}
      </v-row>
      <v-row>
        Фамилия: {{ family.surname }}
      </v-row>
      <v-row>
        Имя: {{ family.name }}
      </v-row>
      <v-row>
        Отчество: {{ family.patronymic }}
      </v-row>
      <v-row>
        Телефон: <a href="tel:'`${this.client.phone}`">+{{ family.phone }}</a>
<!--        todo: решить с телефонами -->
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "CardClientFamily",
  props: {
    family: {
      type: Object
    }
  },
}
</script>

<style scoped>

</style>