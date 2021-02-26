<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="success"
            dark
            class="mb-2"
            v-bind="attrs"
            v-on="on"
            @click="getMilitary"
        >+ Фото
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
<!--          <span class="headline">еттетете</span>-->
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


  </div>
</template>

<script>
export default {
  name: "AddReportForm",
  data: vm => ({
      dialog: false,
      editedIndex: -1,
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
      users: [],
      errors: [],
      military: [],
      menu: false,
      valid: true
  }),
  mounted() {
    this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/users/all/').then(response => {
      this.users = response.data.data

    })
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Новый отчет' : 'Редактирование отчета'
    },
  },
  methods: {
    save(shooting_date) {
      this.$refs.menu.save(shooting_date)
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
    getMilitary() {
      this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/military/').then(response => {
        this.military = response.data.data
        console.log(response)
      })
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
    save_date(shooting_date) {
      this.$refs.menu.save(shooting_date)
    },
    changePhotograph() {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.editedItem.photographer_id) {
          this.editedItem.photographer = this.users[i]
        }
      }
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
    send() {
      this.editedItem.shooting_date = this.formatToSendDate(this.editedItem.shooting_date)
      this.editedItem.status = 'Opened'
      this.editedItem.type = "Photo"
      this.axios.post(process.env.VUE_APP_BACKENDURL + '/api/v1/report/', this.editedItem)
          .then(response => {
            this.$emit('push', response.data.data.id)
            this.editedItem = this.defaultItem
            this.dialog = false
          }).catch(e => {
        this.errors.push(e)
      })
    },
    cancel() {
      this.editedItem = this.defaultItem
      this.dialog = false
    },
  },
}
</script>

<style scoped>

</style>