<template>
  <div>
    <v-row @click="test(paid)">
      <v-col>
        id: {{ paid.id }}
      </v-col>
      <v-col>
        Создан: {{ paid.created_at | formatDateGrip}}
      </v-col>
      <v-col>
        Сумма: {{ paid.amount }}
      </v-col>
      <v-col>
        Комментарий: {{ paid.comment }}
      </v-col>
      <v-col>
        Статус: {{ paid.status }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardPaidReport",
  props: {
    paid: {
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