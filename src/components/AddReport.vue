<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="success"
          dark
          class="mb-2"
          v-bind="attrs"
          v-on="on"
      >+ Отчет</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Отчет</span>
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
                    v-model="report.shooting_date"
                    label="Дата съемки"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
                <v-text-field
                    v-model="report.count_people"
                    :rules="nameRules"
                    label="Количество"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="report.anketa_link"
                    label="Ссылка на анкеты"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="report.photo_link"
                    label="Ссылка на фото"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="report.video_link"
                    label="Ссылка на видео"
                    required
                ></v-text-field>
              </template>
              <v-date-picker
                  locale="ru"
                  ref="picker"
                  v-model="report.shooting_date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
              ></v-date-picker>
            </v-menu>
            <div v-for="(p, index) in report.paid" :key="index">
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
        <v-btn color="error" class="mr-4" @click="dialog = false">Отмена</v-btn>
        <v-btn color="success" class="mr-4" @click="send">Отправить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";


export default {
  name: 'AddReport',

  data: vm => ({
    dialog: false,
    valid: true,
    date: null,
    errors: [],
    report: {
      count_people: 12,
      anketa_link: '',
      photo_link: '',
      video_link: '',
      shooting_date: vm.formatDate(new Date().toISOString().substr(0, 10)),
      military: "1a243e1a-cfc5-44ca-b397-e045006ec58e",
      photographer: "90909cb7-6888-4909-9b53-d51761829f92",
      status: "Opened",
      paid: [],
    },
    menu: false,
    results: [],
    nameRules: [
      v => !!v || 'Поле обязательно',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
  }),
  mounted() {
    this.axios.get(url).then(response => {
      this.results = response.data
    })
  },
  watch: {
    date() {
      this.shooting_date = this.formatDate(this.date)
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date)
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}-${month}-${day}`
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    addPaidReport() {
      this.report.paid.push(
          {
              amount: '',
              comment: '',
              status: 'Unpaid'
          },
          );
    },
    get_report() {

      this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/report/f752af03-620f-408c-bd32-6ff531fc747c/')
          .then(response => {
            console.log(response.data)
            // this.dialog = false
          }).catch(e => {
        this.errors.push(e)
      })
    },
    send() {
      this.axios.post(process.env.VUE_APP_BACKENDURL + '/api/v1/report/', this.report)
          .then(response => {
        console.log(response.data)
        this.dialog = false
      }).catch(e => {
        this.errors.push(e)
      })
    }
  }

}
</script>