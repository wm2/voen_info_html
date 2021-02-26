<template>
  <v-main>
    <v-container fluid>
      <v-toolbar flat color="dark">
        <v-toolbar-title>Клиенты</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="700">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="success"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
            >+
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="12" sm="8" md="10">
                  {{ this.editedItem.surname }} {{ this.editedItem.name }} {{ this.editedItem.patronymic }}
                  <span  offset="1" class="green--text">

                  </span>
                </v-col>
                <v-col cols="12" sm="4" md="2" class="green--text" v-if="editedIndex===-1">
                  {{ editedItem.status | statusFiltersDataGrip  }}
                </v-col>
                <v-col cols="12" sm="4" md="2" class="green--text" v-else-if="editedIndex != -1">
                  {{ editedItem.status | statusFiltersDataGrip  }}
                </v-col>

                <v-row>
                </v-row>
              </v-row>

            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form"
                        v-model="valid"
                        lazy-validation
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
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="editedItem.created_at"
                                    label="Дата съемки"
                                    hint="MM/DD/YYYY"
                                    persistent-hint
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                  locale="ru"
                                  ref="picker"
                                  v-model="editedItem.created_at"
                                  :max="new Date().toISOString().substr(0, 10)"
                                  min="1950-01-01"
                                  @change="save"
                              ></v-date-picker>
                            </v-menu>
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
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                v-model="editedItem.phone"
                                label="Телефон"
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

                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" class="mr-4" @click="cancel">Отмена</v-btn>
              <v-btn v-if="editedIndex === -1" color="success" class="mr-4" @click="send">Добавить</v-btn>
              <v-btn v-else color="success" class="mr-4" @click="putItem">Изменить</v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>
      </v-toolbar>

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
                @click="clickRow(item)"
            >
              mdi-eye
            </v-icon>
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

    </v-container>
  </v-main>
</template>


<script>

import sourceData from '@/choices.json'

export default {
  name: "allClients",

  data: () => ({
    search: '',
    singleSelect: false,
    dialog: false,
    dialog2: false,
    menu: false,
    menu2: false,
    editedIndex: -1,
    operator: '',
    compositor: '',
    valid: true,
    parents_q: "",
    errors: [],
    users: [],
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
    clients: [],
    editedItem: {
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
    }
  }),
  mounted() {
    this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/client/').then(
        response => {
          this.clients = response.data.data
        }
    ).catch(
        e => {
          if (e.response.status === 401) {
            this.$store.dispatch("logout")
                .then(() => {
                  this.$router.push('/crm')
                  this.dialog = false
                })
                .catch(err => console.log(err))
          }
        }
    )
    this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/users/all/').then(response => {
      this.users = response.data.data

    })
  },
  methods: {
    addAddress() {
      this.editedItem.address.push(
          {
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
          }
      )
    },
    addFamily() {
      this.editedItem.family.push(
          {
            relation: '',
            surname: '',
            name: '',
            patronymic: '',
            phone: ''
          }
      )
    },
    save(date) {
      this.$refs.menu.save(date)
      this.$refs.menu2.save(date)
    },
    clickRow(item) {
      this.$router.push('/crm/clients/' + item.id)
    },
    editItem(item) {
      this.editedIndex = this.clients.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.created_at = this.formatDate(new Date(this.editedItem.created_at).toISOString().substr(0, 10))
      this.editedItem.departure = this.formatDate(new Date(this.editedItem.departure).toISOString().substr(0, 10))

      // console.log(this.editItem())
      console.log(this.editedItem)
      this.dialog = true
    },
    send() {
      this.editedItem.departure = this.formatToSendDate(this.editedItem.departure)
      this.editedItem.parents_q = "No"
      this.editedItem.status = "New"
      this.editedItem.compositor = this.defaultItem.compositor
      this.editedItem.operator = this.defaultItem.operator
      this.axios.post(process.env.VUE_APP_BACKENDURL + '/api/v1/client/', this.editedItem)
          .then(response => {
            console.log(response.data)
            this.clients.push(this.editedItem)
            this.dialog = false
          }).catch(e => {
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
      console.log(this.users)
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.editedItem.operator_id) {
          this.editedItem.operator = this.users[i]
        }
      }
    },
    changeCompositor() {
      // this.editedItem.compositor_id = this.compositor
      console.log(this.users)
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.editedItem.compositor_id) {
          this.editedItem.compositor = this.users[i]
        }
      }
    }
  },
  computed: {
    selectedCounter: {
      get() {
        return this.selected.length
      },
      set() {

      }

    },
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
  filters: {
    formatDateGrip: function (value) {
      const datetime = new Date(value)
      const [year, month, day] = datetime.toISOString().substr(0, 10).split('-')
      console.log(`${year}/${month}/${day}`)
      if (!value) return null

      // const [year, month, day] = value.split('-')

      return `${year}-${month}-${day}`
    },
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


<!--        <v-dialog v-model="dialog2" max-width="600">-->
<!--          <template v-slot:activator="{ on, attrs }">-->
<!--            <v-btn-->
<!--                color="warning"-->
<!--                dark-->
<!--                class="mb-2"-->
<!--                v-bind="attrs"-->
<!--                v-on="on"-->
<!--                v-model="selectedCounter"-->
<!--                @click="getUsers">-->
<!--              {{ selectedCounter}} Назначить-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <v-card>-->
<!--            <v-card-title>-->
<!--              {{ selectedCounter }}-->
<!--            </v-card-title>-->

<!--            <v-card-text>-->
<!--              <v-autocomplete-->
<!--                  v-model="pickUser"-->
<!--                  :items="users"-->
<!--                  filled-->
<!--                  color="blue-grey lighten-2"-->
<!--                  label="Select"-->
<!--                  item-text="email"-->
<!--                  item-value="id"-->
<!--              ></v-autocomplete>-->
<!--              <v-data-table-->
<!--                  :headers="smallHeaders"-->
<!--                  :items="selected"-->
<!--                  :search="search"-->
<!--              >-->

<!--              </v-data-table>-->
<!--            </v-card-text>-->
<!--            <v-card-actions>-->
<!--              <v-spacer></v-spacer>-->
<!--              <v-btn color="error" class="mr-4" @click="cancel">Отмена</v-btn>-->
<!--              <v-btn color="success" class="mr-4" @click="pickCompositor">Отмена</v-btn>-->
<!--            </v-card-actions>-->
<!--          </v-card>-->
<!--        </v-dialog>-->
<!--        <v-dialog v-model="dialog" max-width="500px">-->
<!--          <template v-slot:activator="{ on, attrs }">-->
<!--            <v-btn-->
<!--                color="success"-->
<!--                dark-->
<!--                class="mb-2"-->
<!--                v-bind="attrs"-->
<!--                v-on="on"-->
<!--            >+-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <v-card>-->
<!--            {{ this.editedItem.id }}-->
<!--            <v-card-title>-->
<!--              <span class="headline">{{ formTitle }}</span>-->
<!--            </v-card-title>-->
<!--            <v-card-text>-->
<!--              <v-container>-->
<!--                <v-form-->
<!--                    ref="form"-->
<!--                    v-model="valid"-->
<!--                    lazy-validation-->
<!--                >-->
<!--                  <v-menu-->
<!--                      ref="menu"-->
<!--                      v-model="menu"-->
<!--                      :close-on-content-click="false"-->
<!--                      transition="scale-transition"-->
<!--                      offset-y-->
<!--                      min-width="290px"-->
<!--                  >-->
<!--                    <template v-slot:activator="{ on, attrs }">-->
<!--                      <v-text-field-->
<!--                          v-model="editedItem.shooting_date"-->
<!--                          label="Дата съемки"-->
<!--                          hint="MM/DD/YYYY format"-->
<!--                          persistent-hint-->
<!--                          v-bind="attrs"-->
<!--                          v-on="on"-->
<!--                      ></v-text-field>-->
<!--                      <v-text-field-->
<!--                          v-model="editedItem.count_people"-->
<!--                          label="Количество"-->
<!--                          required-->
<!--                      ></v-text-field>-->
<!--                      <v-text-field-->
<!--                          v-model="editedItem.anketa_link"-->
<!--                          label="Ссылка на анкеты"-->
<!--                          required-->
<!--                      ></v-text-field>-->
<!--                      <v-text-field-->
<!--                          v-model="editedItem.photo_link"-->
<!--                          label="Ссылка на фото"-->
<!--                          required-->
<!--                      ></v-text-field>-->
<!--                      <v-text-field-->
<!--                          v-model="editedItem.video_link"-->
<!--                          label="Ссылка на видео"-->
<!--                          required-->
<!--                      ></v-text-field>-->
<!--                    </template>-->
<!--                    <v-date-picker-->
<!--                        locale="ru"-->
<!--                        ref="picker"-->
<!--                        v-model="editedItem.shooting_date"-->
<!--                        :max="new Date().toISOString().substr(0, 10)"-->
<!--                        min="1950-01-01"-->
<!--                        @change="save"-->
<!--                    ></v-date-picker>-->
<!--                  </v-menu>-->
<!--                  <div v-for="(p, index) in editedItem.paid" :key="index">-->
<!--                    <v-text-field-->
<!--                        v-model=p.amount-->
<!--                        label="Сумма"-->
<!--                        required-->
<!--                    ></v-text-field>-->
<!--                    <v-text-field-->
<!--                        v-model=p.comment-->
<!--                        label="Комментарий"-->
<!--                        required-->
<!--                    ></v-text-field>-->
<!--                  </div>-->
<!--                  <v-btn-->
<!--                      color="success"-->
<!--                      class="mr-4"-->
<!--                      @click="addPaidReport"-->
<!--                  >-->
<!--                    + Расходы-->
<!--                  </v-btn>-->
<!--                </v-form>-->
<!--              </v-container>-->
<!--            </v-card-text>-->


<!--            <v-card-actions>-->
<!--              <v-spacer></v-spacer>-->
<!--              <v-btn color="error" class="mr-4" @click="cancel">Отмена</v-btn>-->
<!--              <v-btn v-if="editedIndex === -1" color="success" class="mr-4" @click="send">Добавить</v-btn>-->
<!--              <v-btn v-else color="success" class="mr-4" @click="putItem">Изменить</v-btn>-->
<!--            </v-card-actions>-->
<!--          </v-card>-->
<!--        </v-dialog>-->
