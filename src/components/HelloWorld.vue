<template>
  <div>
    <v-toolbar flat color="dark">
      <v-toolbar-title>Отчеты</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
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
          {{ this.editedItem.id }}
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
              >
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
                        v-model="editedItem.shooting_date"
                        label="Дата съемки"
                        hint="MM/DD/YYYY format"
                        persistent-hint
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    <v-text-field
                        v-model="editedItem.count_people"
                        label="Количество"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="editedItem.anketa_link"
                        label="Ссылка на анкеты"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="editedItem.photo_link"
                        label="Ссылка на фото"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="editedItem.video_link"
                        label="Ссылка на видео"
                        required
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      locale="ru"
                      ref="picker"
                      v-model="editedItem.shooting_date"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1950-01-01"
                      @change="save"
                  ></v-date-picker>
                </v-menu>
                <div v-for="(p, index) in editedItem.paid" :key="index">
                  <v-text-field
                      v-model=p.amount
                      label="Сумма"
                      required
                  ></v-text-field>
                  <v-text-field
                      v-model=p.comment
                      label="Комментарий"
                      required
                  ></v-text-field>
                </div>
                <v-btn
                    color="success"
                    class="mr-4"
                    @click="addPaidReport"
                >
                  + Расходы
                </v-btn>
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
          :items="report"
          :search="search"
      >
        <template v-slot:top>
        </template>
        <template v-slot:item.shooting_date="{ item }">
          {{ item.shooting_date | formatDateGrip}}
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
  </div>
</template>

<script>
const url = process.env.VUE_APP_BACKENDURL + "/api/v1/report/";

export default {
  name: 'HelloWorld',

  data: vm => ({
      dialog: false,
      menu: false,
      valid: true,
      search: '',
      headers: [
        {
          text: 'Дата съемки',
          align: 'start',
          id: 'name',
          value: 'shooting_date'
        },
        // {text: 'Дата съемки', value: 'shooting_date'},
        // {text: 'Часть', value: 'military'},
        {text: 'Кол-во', value: 'count_people'  },
        {text: 'Анкеты', value: 'anketa_link'},
        {text: 'Фотографии', value: 'photo_link'},
        {text: 'Видео', value: 'video_link'},
        {text: 'Фотограф', value: 'photographer'},
        {text: 'Дизайнер', value: 'designer'},
        {text: 'Проверяющий', value: 'checker'},
        {text: 'Статус', value: 'status'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      report: [
        {
          id: '',
          shooting_date: vm.formatDate(new Date().toISOString().substr(0, 10)),
          military: '',
          count_people: '',
          anketa_link: '',
          photo_link: '',
          video_link: '',
          photographer: '',
          designer: '',
          checker: '',
          status: ''
        }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        shooting_date: vm.formatDate(new Date().toISOString().substr(0, 10)),
        military: '',
        count_people: '',
        anketa_link: '',
        photo_link: '',
        video_link: '',
        photographer: '',
        designer: '',
        checker: '',
        status: '',
        paid: [

        ]
      },
      defaultItem: {
        id: '',
        shooting_date: vm.formatDate(new Date().toISOString().substr(0, 10)),
        military: '',
        count_people: '',
        anketa_link: '',
        photo_link: '',
        video_link: '',
        photographer: '',
        designer: '',
        checker: '',
        status: '',
        paid: [

        ]
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Новый отчет' : 'Редактирование отчета'
    },
  },
  mounted() {
    this.axios.get(url).then(response => {
      this.report = response.data.data
    })
  },
  watch: {
    date() {
      this.report.shooting_date = this.formatDate(this.date)
    },
    dialog(val) {
      val || this.close()
    },
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.report.indexOf(item)
      this.editedItem = Object.assign({}, item)

      this.editedItem.shooting_date = this.formatDate(new Date(this.editedItem.shooting_date).toISOString().substr(0, 10))
      this.dialog = true
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save(shooting_date) {
      this.$refs.menu.save(shooting_date)
    },
    addPaidReport() {
      this.editedItem.paid.push(
          {
            amount: '',
            comment: '',
            status: 'Unpaid'
          },
      );
    },
    deleteItem(item) {
      const index = this.report.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.axios.delete(process.env.VUE_APP_BACKENDURL + '/api/v1/report/' + item.id + '/')
          .then(response => {
            console.log(response.data)
            this.report.splice(index, 1)
          }).catch(e => {
        this.errors.push(e)
      })
    },
    putItem() {
      if (this.editedIndex > -1) {
        Object.assign(this.report[this.editedIndex], this.editedItem)
      }
      this.editedItem.shooting_date = this.formatToSendDate(this.editedItem.shooting_date)
      this.axios.put(process.env.VUE_APP_BACKENDURL + '/api/v1/report/' + this.editedItem.id + '/', this.editedItem)
          .then(response => {
            console.log(response.data)
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            this.editedItem = this.defaultItem
            this.dialog = false
          }).catch(e => {
        this.errors.push(e)
      })
    },
    send() {
      this.editedItem.shooting_date = this.formatToSendDate(this.editedItem.shooting_date)
      this.editedItem.military = '1a243e1a-cfc5-44ca-b397-e045006ec58e'
      this.editedItem.status = 'Opened'
      this.axios.post(process.env.VUE_APP_BACKENDURL + '/api/v1/report/', this.editedItem)
          .then(response => {
            console.log(response.data)
            this.report.push(this.editedItem)
            this.dialog = false
          }).catch(e => {
        this.errors.push(e)
      })
    },
    cancel() {
      this.editedItem = this.defaultItem
      this.dialog = false
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
  },
  filters: {
    formatDateGrip: function (value) {
      const datetime = new Date(value)
      const [year, month, day] = datetime.toISOString().substr(0, 10).split('-')
      // console.log(day + '-' + month + '-' + year)
      console.log(value)
      console.log(`${year}/${month}/${day}`)
      if (!value) return null

      // const [year, month, day] = value.split('-')

      return `${year}-${month}-${day}`
    }
  }

}
</script>

<!--<AddReportCard-->
<!--    :reportItem="this.editedItem"-->
<!--    :dialogStatus="this.dialog"-->
<!--    :editedIndexStatus="this.editedIndex"></AddReportCard>-->