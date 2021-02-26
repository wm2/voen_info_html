<template>
  <div>
    <v-row @click="test(client)">
<!--      <v-col>-->
<!--        id: {{ client.id }}-->
<!--      </v-col>-->
      <v-col>
        Создан: {{ client.created_at | formatDateGrip}}
      </v-col>
      <v-col>
        Фио: {{ client.surname }} {{ client.name }} {{ client.patronymic }}
      </v-col>
      <v-col>
        Телефон: <a href="tel:'`${this.client.phone}`">+{{ client.phone }}</a>
      </v-col>
<!--      <v-col>-->
<!--        Создан: {{ client.departure | formatDateGrip}}-->
<!--      </v-col>-->
      <v-col>
        Статус: {{ client.status | statusClientFiltersDataGrip}}
      </v-col>
      <v-col>
        {{ client.parents_q | statusParentsQFiltersDataGrip}}
      </v-col>
      <v-col>
        № {{ client.number }}
      </v-col>
      <v-col>
        Коммент: {{ client.comment }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardClient",
  props: {
    client: {
      type: Object
    }
  },
  methods: {
    test(value) {
      this.$emit('openClient', value)
    }
  }

}
</script>

<style scoped>

</style>