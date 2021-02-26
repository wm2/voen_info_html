<template>
  <div>
    <br>
    <br>
    <br>
    <v-form ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="send"
    >
      <v-tabs>
        <v-tab>
          <v-icon left>
            mdi-information-outline
          </v-icon>
          Клиент
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-home
          </v-icon>
          Адреса
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-account
          </v-icon>
          Семья
        </v-tab>
        <v-col>
          Родители:
          <span v-if="editedItem.parents_q==='Yes'" class="green--text">

                          {{ editedItem.parents_q | ParentsQFiltersDataGrip }}
                        </span>
          <span v-else class="red--text">
                          {{ editedItem.parents_q | ParentsQFiltersDataGrip }}
                        </span>
        </v-col>

        <v-tab-item>
          <v-card flat>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    v-model="editedItem.phone"
                    label="Телефон"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    v-model="editedItem.number"
                    label="Номер анкеты"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">

                <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="editedItem.departure"
                        label="Дата убытия"
                        hint="MM/DD/YYYY"
                        persistent-hint
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      locale="ru"
                      ref="picker"
                      v-model="editedItem.departure"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1950-01-01"
                      @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    v-model="editedItem.surname"
                    label="Фамилия"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    v-model="editedItem.name"
                    label="Имя"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    v-model="editedItem.patronymic"
                    label="Отчество"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-textarea
                    v-model="editedItem.comment"
                    label="Примечание"
                    required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">

                <v-autocomplete
                    v-model="editedItem.operator_id"
                    :items="users"
                    filled
                    color="blue-grey lighten-2"
                    label="Оператор"
                    item-text="email"
                    item-value="id"
                    @change="changeOperator"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">

                <v-autocomplete
                    v-model="editedItem.compositor_id"
                    :items="users"
                    filled
                    color="blue-grey lighten-2"
                    label="Наборщик"
                    item-text="email"
                    item-value="id"
                    @change="changeCompositor"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-card>
          <v-row class="green--text">
            Наборщик: {{ editedItem.compositor.email }}
          </v-row>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <div v-for="(a, index) in editedItem.address" :key="index">
                <v-text-field
                    v-model=a.zip_code
                    label="Индекс"
                    required
                ></v-text-field>
                <v-autocomplete
                    v-model="a.region"
                    :items="regions"
                    filled
                    color="blue-grey lighten-2"
                    label="Регион"
                    item-text="value"
                    item-value="key"
                ></v-autocomplete>
                <v-text-field
                    v-model=a.district
                    label="район"
                    required
                ></v-text-field>
                <v-autocomplete
                    v-model="a.city"
                    :items="cities"
                    filled
                    color="blue-grey lighten-2"
                    label="Город"
                    item-text="value"
                    item-value="key"
                ></v-autocomplete>
                <v-text-field
                    v-model=a.city_name
                    label="Название"
                    required
                ></v-text-field>
                <v-autocomplete
                    v-model="a.street"
                    :items="streets"
                    filled
                    color="blue-grey lighten-2"
                    label="Улица"
                    item-text="value"
                    item-value="key"
                ></v-autocomplete>
                <v-text-field
                    v-model=a.street_name
                    label="Улица"
                    required
                ></v-text-field>
                <v-text-field
                    v-model=a.house_number
                    label="Номер дома"
                    required
                ></v-text-field>
                <v-text-field
                    v-model=a.building
                    label="Строение"
                    required
                ></v-text-field>
                <v-text-field
                    v-model=a.flat
                    label="Квартира"
                    required
                ></v-text-field>
                <br>
                <br>
              </div>
              <v-btn
                  color="success"
                  class="mr-4"
                  @click="addAddress"
              >
                + Адрес
              </v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>


        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <div v-for="(f, index) in editedItem.family" :key="index">
                <v-text-field
                    v-model=f.relation
                    label="Родственник"
                    required
                ></v-text-field>
                <v-text-field
                    v-model=f.surname
                    label="Фамилия"
                    required
                ></v-text-field>
                <v-text-field
                    v-model=f.name
                    label="Имя"
                    required
                ></v-text-field>
                <v-text-field
                    v-model=f.patronymic
                    label="Отчество"
                    required
                ></v-text-field>
                <v-text-field
                    v-model=f.phone
                    label="Телефон"
                    required
                ></v-text-field>
                <br>
              </div>
              <v-btn
                  color="success"
                  class="mr-4"
                  @click="addFamily"
              >
                + Родственник
              </v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>

      <v-btn color="error" class="mr-4" @click.prevent="cancel">Отмена</v-btn>
      <v-btn color="success" type="submit" class="mr-4">Добавить</v-btn>
    </v-form>
  </div>

</template>

<script>
import sourceData from "@/choices.json";

export default {
  name: "AddClient",
  data() {
    return {
      parents_q: "",
      defaultItem: {
        id: '',
        created_at: '',
        number: '',
        name: '',
        surname: '',
        patronymic: '',
        phone: '',
        departure: '',
        parents_q: '',
        comment: '',
        status: '',
        compositor_id: '',
        compositor: '',
        military_id: '',
        military: '',
        operator_id: '',
        operator: '',
        address: [],
        family: []
      },
      editedItem: {
        id: '',
        created_at: '',
        number: '123',
        name: 'asdasd',
        surname: 'asdasd',
        patronymic: 'asdasd',
        phone: '89098327856',
        departure: '',
        parents_q: '',
        comment: 'asdadsas',
        status: '',
        compositor_id: '',
        compositor: '',
        military_id: '',
        military: '',
        operator_id: '',
        operator: '',
        address: [],
        family: []
      },

      default_family: [{
        relation: '',
        surname: '',
        name: '',
        patronymic: '',
        phone: ''
      }],
      default_address: [{
        zip_code: '',
        region: '',
        district: '',
        city: '',
        city_name: '',
        street: '',
        street_name: '',
        house_number: '',
        building: '',
        flat: ''
      }],
      users: [],
      menu: false,
      menu2: false,
      valid: true,
      errors: [],
      clients: [],
      compositor: ''
    }
  },
  mounted() {
    this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/users/all/').then(response => {
      this.users = response.data.data

    })
  },
  computed: {
    regions() {
      return sourceData.regions
    },
    cities() {
      return sourceData.cities
    },
    streets() {
      return sourceData.streets
    }
  },
  methods: {
    addAddress() {
      this.editedItem.address.push(
          {
            zip_code: '346119',
            region: 'Edge',
            district: 'asdasd',
            city: 'Town',
            city_name: 'asdasdasd',
            street: 'Avenue',
            street_name: 'asdasd',
            house_number: '123',
            building: '2',
            flat: '123'
          }
      )
    },
    addFamily() {
      this.editedItem.family.push(
          {
            relation: 'asdasd',
            surname: 'asdasd',
            name: 'asdasd',
            patronymic: 'asdasdasd',
            phone: '89089326547'
          }
      )
    },
    save(date) {
      this.$refs.menu2.save(date)
    },
    editItem(item) {
      this.editedIndex = this.clients.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.created_at = this.formatDate(new Date(this.editedItem.created_at).toISOString().substr(0, 10))
      this.editedItem.departure = this.formatDate(new Date(this.editedItem.departure).toISOString().substr(0, 10))

      // console.log(this.editItem())
      // console.log(this.editedItem)
      this.dialog = true
    },
    send() {
      this.editedItem.departure = this.formatToSendDate(this.editedItem.departure)
      this.editedItem.created_at = this.formatToSendDate(this.editedItem.created_at)
      this.editedItem.parents_q = "No"
      this.editedItem.status = "New"
      this.editedItem.compositor = this.defaultItem.compositor
      this.editedItem.operator = this.defaultItem.operator

      this.axios.post(process.env.VUE_APP_BACKENDURL + '/api/v1/client/', this.editedItem)
          .then(resp => {
            console.log(resp.data)
            // this.clients.push(resp.data.data)
            // console.log(resp.data.data)

            // this.editedItem.created_at = this.editedItem.created_at.split(' ')[0]
            // this.editedItem.departure = this.editedItem.departure.split(' ')[0]
            this.$emit('save', resp.data.data)
            this.dialog = false
            this.editedItem = {
              id: '',
              created_at: '',
              number: '',
              name: '',
              surname: '',
              patronymic: '',
              phone: '',
              departure: '',
              parents_q: '',
              comment: '',
              status: '',
              compositor_id: '',
              compositor: '',
              military_id: '',
              military: '',
              operator_id: '',
              operator: '',
              address: [],
              family: []
            }
          }).catch(e => {
        this.editedItem.created_at = this.editedItem.created_at.split(' ')[0]
        this.editedItem.departure = this.editedItem.departure.split(' ')[0]
        this.errors.push(e)
      })
    },
    putItem() {
      if (this.editedIndex > -1) {
        Object.assign(this.clients[this.editedIndex], this.editedItem)

        console.log("asdassssssssssssssssssssssssssssssssssssssssssssssssssss")
        console.log(this.clients[this.editedIndex].operator_id)

        console.log("asdassssssssssssssssssssssssssssssssssssssssssssssssssss")
      }
      this.editedItem.created_at = this.formatToSendDate(this.editedItem.created_at)
      this.editedItem.departure = this.formatToSendDate(this.editedItem.departure)
      // if (this.editedItem.compositor_id == ''){
      //
      // }
      this.editedItem.compositor = this.defaultItem.compositor
      this.editedItem.operator = this.defaultItem.operator
      this.axios.put(process.env.VUE_APP_BACKENDURL + '/api/v1/client/' + this.editedItem.id + '/', this.editedItem)
          .then(response => {
            console.log(response.data)
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            this.editedItem = this.defaultItem
            this.compositor = ''
            this.operator = ''
            this.dialog = false
          }).catch(e => {
        this.editedItem.created_at = this.editedItem.created_at.split(' ')[0]
        this.editedItem.departure = this.editedItem.departure.split(' ')[0]
        this.errors.push(e)
      })
    },
    cancel() {
      this.editedItem = this.defaultItem
      this.dialog = false
      this.dialog2 = false
      this.editedIndex = -1
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}-${month}-${day}`
    },
    formatToSendDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}-${month}-${day} 04:00:00`
    },
    changeOperator() {
      // this.editedItem.operator_id = this.operator
      // console.log(this.users)
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.editedItem.operator_id) {
          this.editedItem.operator = this.users[i]
        }
      }
    },
    changeCompositor() {
      // this.editedItem.compositor_id = this.compositor
      // console.log(this.users)
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.editedItem.compositor_id) {
          this.editedItem.compositor = this.users[i]
        }
      }
    }
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
  }
}
</script>

<style scoped>

</style>