<template>
  <v-card>
    <v-card-title>
      <v-text-field
          v-model="search"
          label="Поиск"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="clients"
        :search="search"
        v-model="selected"
        :single-select="singleSelect"
        show-select
    >
      <template v-slot:top>
        <v-switch v-model="singleSelect" label="Одиночный выбор" class="pa-3"></v-switch>
      </template>
      <template v-slot:item.created_at="{ item }">
        {{ item.created_at | formatDateGrip }}
      </template>
      >
      <template v-slot:item.departure="{ item }">
        {{ item.departure | formatDateGrip }}
      </template>
      <template v-slot:item.status="{ item }">
        {{ item.status | statusFiltersDataGrip }}
      </template>
      <template v-slot:item.parents_q="{ item }">
        {{ item.parents_q | ParentsQFiltersDataGrip }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import sourceData from "@/choices.json";

export default {
name: "ClientsDataTable",
  props: {
    clients: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      search: '',
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Дата Создания',
          align: 'Старт',
          id: 'name',
          value: 'created_at'
        },
        {text: 'Фамилия', value: 'surname'},
        {text: 'Имя', value: 'name'},
        {text: 'Отчество', value: 'patronymic'},
        {text: 'Телефон', value: 'phone'},
        {text: 'Дата убытия', value: 'departure'},
        {text: 'Коммент', value: 'comment'},
        {text: 'Статус', value: 'status'},
        {text: '?', value: 'parents_q'},
        {text: '№', value: 'number', placeholder: 'asdasdasd'},
        {text: 'Наборщик', value: 'compositor.email'},
        {text: 'Оператор', value: 'operator.email'},

        {text: 'Actions', value: 'actions', sortable: false},
      ],
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.clients.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.created_at = this.formatDate(new Date(this.editedItem.created_at).toISOString().substr(0, 10))
      this.editedItem.departure = this.formatDate(new Date(this.editedItem.departure).toISOString().substr(0, 10))

      // console.log(this.editItem())
      console.log(this.editedItem)
      this.dialog = true
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}-${month}-${day}`
    },
  },
  filters: {
    ParentsQFiltersDataGrip: function (value) {
      let parents_q = sourceData.parents_q
      return parents_q[value]
    },

    statusFiltersDataGrip: function (value) {
      let status_q = sourceData.status_q
      return status_q[value]
    },
    formatDateGrip: function (value) {
      const datetime = new Date(value)
      const [year, month, day] = datetime.toISOString().substr(0, 10).split('-')
      console.log(`${year}/${month}/${day}`)
      if (!value) return null

      // const [year, month, day] = value.split('-')

      return `${year}-${month}-${day}`
    },
  }
}
</script>

<style scoped>

</style>