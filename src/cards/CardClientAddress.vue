<template>
  <div>
    <v-col>
      <v-row>
        Создан: {{ address.created_at | formatDateGrip }}
      </v-row>
      <v-row>
        {{ address.zip_code }}, {{ address.district }} {{ address.region | regionFilters}}
      </v-row>
      <v-row>
        {{ address.city | cityFilters }} {{ address.city_name }},
      </v-row>
      <v-row>
        {{ address.street | streetFilters }} {{ address.street_name }} д. {{ address.house_number }} / {{ address.building }} кв: {{ address.flat }}
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "CardClientAddress",
  props: {
    address: {
      type: Object
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>