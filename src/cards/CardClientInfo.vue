<template>
  <div>
    <v-col>
      <v-row>
        Создан: {{ client.created_at | formatDateGrip}}
      </v-row>
      <v-row>
        Статус: {{ client.status | statusClientFiltersDataGrip}}
      </v-row>
      <v-row>
        Родители: {{ client.parents_q | statusParentsQFiltersDataGrip }}
      </v-row>
      <v-row>
        № Анкеты: {{ client.number }}
      </v-row>
<!--      <v-row>-->
<!--        Фотограф: {{ client }}-->
<!--      </v-row>-->
      <v-row>
        Оператор: {{ client.operator_id }}
      </v-row>
      <v-row>
        Наборщик: {{ client.compositor_id }}
      </v-row>
      <v-row>
        Часть: {{ client.military_id }}
      </v-row>
      <v-row>
        Комментарий: {{ client.comment }}
      </v-row>
    </v-col>

  </div>
</template>

<script>
export default {
  name: "CardClientInfo",
  props: {
    client: {
      type: Object
    }
  },
  methods: {
    test(value) {
      this.$emit('row-emit', value)
    }
  }

}
</script>

<style scoped>

</style>