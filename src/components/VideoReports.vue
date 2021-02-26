<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-main>
    <v-container fluid>
      <v-toolbar flat color="dark">
        <v-toolbar-title>Отчеты</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog2" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="warning"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                v-model="selectedCounter"
                @click="getUsers">
              {{ selectedCounter }} Назначить
            </v-btn>

          </template>
          <v-card>
            <v-card-title>
              {{ selectedCounter }}
            </v-card-title>

            <v-card-text>
              <v-autocomplete
                  v-model="pickUser"
                  :items="users"
                  filled
                  color="blue-grey lighten-2"
                  label="Проверяющий"
                  item-text="email"
                  item-value="id"
              ></v-autocomplete>
              <v-data-table
                  :headers="smallHeaders"
                  :items="selected"
                  :search="search"
                  :row="clickRow"
              >

              </v-data-table>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" class="mr-4" @click="cancel">Отмена</v-btn>
              <v-btn color="success" class="mr-4" @click="pickCompositor">Назначить</v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" max-width="500px">
<!--          <template v-slot:activator="{ on, attrs }">-->
<!--            <v-btn-->
<!--                color="success"-->
<!--                dark-->
<!--                class="mb-2"-->
<!--                v-bind="attrs"-->
<!--                v-on="on"-->
<!--                @click="getMilitary"-->
<!--            >+ Фото-->
<!--            </v-btn>-->
<!--          </template>-->
          <v-card>
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
                  <v-autocomplete
                      v-model="editedItem.military_id"
                      :items="military"
                      filled
                      color="blue-grey lighten-2"
                      label="Военная часть"
                      item-text="full_name"
                      item-value="id"
                      @change="changeMilitary"
                  ></v-autocomplete>
                  <v-autocomplete
                      v-model="editedItem.photographer_id"
                      :items="users"
                      filled
                      color="blue-grey lighten-2"
                      label="Фотограф"
                      item-text="email"
                      item-value="id"
                      @change="changePhotograph"
                  ></v-autocomplete>
                  <v-autocomplete
                      v-model="editedItem.designer_id"
                      :items="users"
                      filled
                      color="blue-grey lighten-2"
                      label="Дизайнер"
                      item-text="email"
                      item-value="id"
                      @change="changeDesigner"
                  ></v-autocomplete>
                  <v-autocomplete
                      v-model="editedItem.checker_id"
                      :items="users"
                      filled
                      color="blue-grey lighten-2"
                      label="Проверяющий"
                      item-text="email"
                      item-value="id"
                      @change="changeChecker"
                  ></v-autocomplete>
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
<!--        <v-dialog v-model="dialog3" max-width="500px">-->
<!--          <template v-slot:activator="{ on, attrs }">-->
<!--            <v-btn-->
<!--                color="success"-->
<!--                dark-->
<!--                class="mb-2"-->
<!--                v-bind="attrs"-->
<!--                v-on="on"-->
<!--                @click="getMilitary"-->
<!--            >Видео-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <v-card>-->
<!--            <v-card-title>-->
<!--              <span class="headline">{{ formTitle }}</span>-->
<!--            </v-card-title>-->
<!--            <v-card-text>-->
<!--              <v-container>-->
                <add-report-form @push="pushReport"/>
                <add-video-report-form @push="pushReport"/>
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
            :expanded.sync="expanded"
            :single-select="singleSelect"
            v-model="selected"
            show-expand
            show-select
        >
          <template v-slot:top>
            <v-switch v-model="singleSelect" label="Одиночный выбор" class="pa-3"></v-switch>
          </template>
          <template v-slot:item.shooting_date="{ item }">
            {{ item.shooting_date | formatDateGrip }}
          </template>
          <template v-slot:item.anketa_link="{ item }">
            <a :href="item.anketa_link"
            target="_blank">
              Анкеты
            </a>
          </template>
          <template v-slot:item.photo_link="{ item }">
            <a :href="item.photo_link"
            target="_blank">
              Фотографии
            </a>
          </template>
          <template v-slot:item.video_link="{ item }">
            <a :href="item.video_link"
            target="_blank">
              Видео
            </a>
          </template>
          <template v-slot:item.status="{ item }">
            {{ item.status | statusFiltersDataGrip }}
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
          <template v-slot:expanded-item="{ headers, item }">
            <div v-for="(p, index) in item.paid" :key="index">
              {{ index + 1 }}: {{ p.created_at | formatDateGrip }} <br>
              Сумма: {{ p.amount }} <br>
              Статус: {{ p.status }} <br>
              Комментарий: {{ p.comment }} <br>
              <br>
            </div>
          </template>
        </v-data-table>
      </v-card>


    </v-container>

  </v-main>
</template>

<script>
import sourceData from "@/choices.json";
import AddReportForm from "@/forms/AddReportForm";
import AddVideoReportForm from "@/forms/AddVideoReportForm";

const url = process.env.VUE_APP_BACKENDURL + "/api/v1/video_report/";

export default {
  name: 'Reports',
  components: {AddVideoReportForm, AddReportForm},
  data: vm => ({
    dialog: false,
    dialog2: false,
    menu: false,
    valid: true,
    search: '',
    expanded: [],
    selected: [],
    pickUser: [],
    errors: [],
    singleSelect: false,
    smallHeaders: [
      {
        text: 'Дата съемки',
        align: 'start',
        id: 'name',
        value: 'shooting_date'
      },
      {text: 'Часть', value: 'military.locality'},
      {text: 'Кол-во', value: 'count_people'},
      {text: 'Статус', value: 'status'},
    ],
    headers: [
      {
        text: 'Дата съемки',
        align: 'start',
        id: 'name',
        value: 'shooting_date'
      },
      {text: 'Часть', value: 'military.locality'},
      {text: 'Кол-во', value: 'count_people'},
      {text: 'Анкеты', value: 'anketa_link'},
      {text: 'Фотографии', value: 'photo_link'},
      {text: 'Видео', value: 'video_link'},
      {text: 'Фотограф', value: 'photographer.email'},
      {text: 'Дизайнер', value: 'designer.email'},
      {text: 'Проверяющий', value: 'checker.email'},
      {text: 'Статус', value: 'status'},
      {text: 'Actions', value: 'actions', sortable: false},

      {text: '', value: 'data-table-expand'},
    ],
    report: [
      {
        id: '',
        shooting_date: vm.formatDate(new Date().toISOString().substr(0, 10)),
        military_id: '',
        military: {},
        count_people: '',
        anketa_link: '',
        photo_link: '',
        video_link: '',
        photographer_id: '',
        photographer: {},
        designer_id: '',
        designer: {},
        checker_id: '',
        checker: {},
        compositor_id: '',
        compositor: {},
        status: '',
        paid: []
      }
    ],
    editedIndex: -1,
    editedItem: {
      id: '',
      shooting_date: vm.formatDate(new Date().toISOString().substr(0, 10)),
      military_id: '',
      military: {},
      count_people: '',
      anketa_link: '',
      photo_link: '',
      video_link: '',
      photographer_id: '',
      photographer: {},
      designer_id: '',
      designer: {},
      checker_id: '',
      checker: {},
      compositor_id: '',
      compositor: {},
      status: '',
      clients_report: {},
      paid: []
    },
    defaultItem: {
      id: '',
      shooting_date: vm.formatDate(new Date().toISOString().substr(0, 10)),
      military_id: '',
      military: {},
      count_people: '',
      anketa_link: '',
      photo_link: '',
      video_link: '',
      photographer_id: '',
      photographer: {},
      designer_id: '',
      designer: {},
      checker_id: '',
      checker: {},
      compositor_id: '',
      compositor: {},
      status: '',
      paid: []
    },
    users: [],
    military: [],
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Новый отчет' : 'Редактирование отчета'
    },
    selectedCounter: {
      get() {
        return this.selected.length
      },
      set() {

      }

    },
  },
  created() {
    console.log(this.$store.getters.isLoggedIn)
    console.log(this.$store.getters.user.role)
  },
  mounted() {
    this.axios.get(url).then(response => {
      this.report = response.data.data
    }).catch(e => {
      // this.errors.push(e)
      if (e.response.status === 401) {
        this.$store.dispatch("logout")
            .then(() => {
              this.$router.push('/crm')
              this.dialog = false
            })
            .catch(err => console.log(err))
      }
    })
    this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/users/all/').then(response => {
      this.users = response.data.data

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
    pushReport(id) {

      this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/report/' + id + '/').then(response => {
        this.report.push(response.data.data)

      })
    },
    send() {
      this.editedItem.shooting_date = this.formatToSendDate(this.editedItem.shooting_date)
      this.editedItem.status = 'Opened'

      this.axios.post(process.env.VUE_APP_BACKENDURL + '/api/v1/report/', this.editedItem)
          .then(response => {
            console.log(response.data)
            this.report.push(this.editedItem)
            console.log(this.editedItem)
            this.dialog = false
          }).catch(e => {
        this.errors.push(e)
      })
    },
    getUsers() {
      this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/users/all/').then(response => {
        this.users = response.data.data

      })
    },
    getMilitary() {
      this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/military/').then(response => {
        this.military = response.data.data
        console.log(response)
      })
    },
    clickRow(item) {
      console.log(item)
      this.$router.push('/crm/video_reports/' + item.id)
    },
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
      confirm('Вы действительно хотите удалить данный отчет?') && this.axios.delete(process.env.VUE_APP_BACKENDURL + '/api/v1/report/' + item.id + '/')
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
      console.log(this.editedItem.id)
      this.editedItem.shooting_date = this.formatToSendDate(this.editedItem.shooting_date)
      this.editedItem.photographer = this.defaultItem.photographer
      this.editedItem.designer = this.defaultItem.designer
      this.editedItem.checker = this.defaultItem.checker
      delete this.editedItem.deal
      delete this.editedItem.clients_report
      delete this.editedItem.compositor
      delete this.editedItem.compositor_id
      this.axios.put(process.env.VUE_APP_BACKENDURL + '/api/v1/report/' + this.editedItem.id + '/', this.editedItem)
          .then(response => {
            console.log(response.data)
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            this.editedItem = this.defaultItem
            this.dialog = false
          }).catch(e => {
        this.editedItem.shooting_date = this.editedItem.shooting_date.split(' ')[0]
        this.errors.push(e)
      })
    },
    pickCompositor() {
      this.axios.put(process.env.VUE_APP_BACKENDURL + '/api/v1/reports/' + this.pickUser + '/', this.selected)
          .then(() => {
            this.axios.get(url).then(response => {
              this.report = response.data.data
            })
            this.dialog2 = false
          }).catch(e => {
        this.errors.push(e)
      })
    },
    cancel() {
      this.editedItem = this.defaultItem
      this.dialog = false
      this.dialog2 = false
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
    changePhotograph() {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.editedItem.photographer_id) {
          this.editedItem.photographer = this.users[i]
        }
      }
    },
    changeMilitary() {
      for (let i = 0; i < this.users.length; i++) {
        if (this.military[i].id === this.editedItem.military_id) {
          this.editedItem.military = this.military[i]
        }
      }
    },
    changeDesigner() {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.editedItem.designer_id) {
          this.editedItem.designer = this.users[i]
        }
      }
    },
    changeChecker() {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.editedItem.checker_id) {
          this.editedItem.checker = this.users[i]
        }
      }
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
    },
    statusFiltersDataGrip: function (value){
      let reportStatus = sourceData.reports_q
      return reportStatus[value]
    },
  },

}
</script>

<!--<AddReportCard-->
<!--    :reportItem="this.editedItem"-->
<!--    :dialogStatus="this.dialog"-->
<!--    :editedIndexStatus="this.editedIndex"></AddReportCard>-->