<template>
  <div>
    <v-row @click="open(deal)">
<!--      <v-col>-->
<!--        id: {{ deal.id }}-->
<!--      </v-col>-->
      <v-col>
        Создан: {{ deal.created_at | formatDateGrip}}
      </v-col>
      <v-col>
        Клиент: {{ deal.client.surname }} {{ deal.client.name }} {{ deal.client.patronymic }}
      </v-col>
      <v-col>
        Сумма: {{ deal.amount }}
      </v-col>
      <v-col>
        Скидка: {{ deal.sale }}
      </v-col>
<!--      <v-col>-->
<!--        Заказ: {{ deal.order_id }}-->
<!--      </v-col>-->
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardDeal",
  props: {
    deal: {
      type: Object
    }
  },
  methods: {
    open(value) {
      this.$emit('openDeal', value)
    }
  }
}
</script>

<style scoped>

</style>