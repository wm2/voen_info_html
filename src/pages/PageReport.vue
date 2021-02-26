<template>
  <v-main>
    <v-container fluid>
      <v-card>
        <v-card-title>

          <a @click="back">
            <v-icon left>
              mdi-arrow-left
            </v-icon>
          </a>
          Отчет: {{ report.named }}
          <v-spacer></v-spacer>
          {{ report.created_at | formatDateGrip }}
          {{ report.status | statusReportFiltersDataGrip }}
        </v-card-title>
        <v-row>
          <v-col>
            <v-col>
              <p v-if="report.type=='Photo'">
                <a class="v-btn"
                   :href="report.photo_link"
                   target="_blank">
                  Фото
                </a>
              </p>
              <p v-if="report.type=='Video'">
                <a class="v-btn"
                   :href="report.video_link"
                   target="_blank">
                  Видео
                </a>
              </p>
              <p>
                <a class="v-btn"
                   :href="report.anketa_link"
                   target="_blank">
                  Анкеты
                </a>
              </p>
              <p v-if="report.type=='Photo'">
                <a class="v-btn" v-if="this.report.nachalo"
                   :href="this.report.nachalo"
                   target="_blank">
                  Начало
                </a>
              </p>
              <p v-if="this.report.type == 'Video'">
<!--                <v-btn class="v-card&#45;&#45;link" style="margin-right: 15px">-->
<!--                  <add-big-video :report_id="this.report_id" :title="this.title_nachalo" :video_choice="nachalo"/>-->
                  <add-big-video :report_id="this.report.id" title="Начало видео" video_choice="start"/>
<!--                </v-btn>-->
              </p>
              <p>
                <a class="v-btn" v-if="this.report.konec"
                   :href="this.report.konec"
                   target="_blank">
                  Конец
                </a>
              </p>
              <p v-if="this.report.type == 'Video'">
<!--                <v-btn class="v-card&#45;&#45;link" style="margin-right: 15px">-->
                  <add-big-video :report_id="this.report.id" title="Конец видео" video_choice="end"/>
<!--                  <add-big-video :report_id="this.report_id" :title="this.title_konec" :video_choice="konec"/>-->
<!--                </v-btn>-->
              </p>
            </v-col>
          </v-col>
          <v-col>
            <p v-if="report.photographer">
              Фотограф: {{ report.photographer.email }}
            </p>
            <p v-if="report.designerr">
              Дизайнер: {{ report.designer.email }}
            </p>

            <p v-if="report.checker">
              Проверяющий: {{ report.checker.email }}
            </p>

            <p v-if="report.compositor">
              Наборщик: {{ report.compositor.email }}
            </p>
            <v-row>
              <v-col>
                <v-btn class="success" @click="addClients" style="margin-right: 15px" v-if="report.type=='Photo'">
                  + Клиенты
                </v-btn>
                <v-btn class="success" style="margin-right: 15px" v-if="report.type=='Video'">
                  <add-cutted-form :report_id="this.report.id"/>
                </v-btn>
                <v-btn class="success" style="margin-right: 15px" v-if="report.type=='Video'">
                  <add-client-to-video-report :report_id="this.report.id" @push="pushClient"/>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn class="success" style="margin-right: 15px" v-if="report.type=='Photo'">
                  <add-simple-client-photo :report_id="this.report.id"/>
                </v-btn>
                <v-btn class="success" style="margin-right: 15px" v-if="report.type=='Photo'">
                  <add-original-client-photo :report_id="this.report.id"/>
                </v-btn>
              </v-col>
            </v-row>
            <!--            <v-row>-->
            <!--              <v-col>-->
            <!--                <v-btn class="success" @click="addClients" style="margin-right: 5px">-->
            <!--                  + Клиенты-->
            <!--                </v-btn>-->
            <!--              </v-col>-->
            <!--            </v-row>-->

          </v-col>
        </v-row>
        <v-tabs>
          <v-tab>
            Клиенты
          </v-tab>
          <v-tab>
            Сделки
          </v-tab>
          <v-tab>
            Оплаты
          </v-tab>
          <v-tab>
            Заказы
          </v-tab>
          <v-tab>
            Статистика
          </v-tab>
          <v-tab-item>
            <v-card-text>
              <v-row>
                <v-col>
                  <CardClient
                      v-for="client in report.clients_report"
                      :client="client"
                      :key="client.id"
                      @openClient="openClient"

                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-row>
                <v-col>
                  <CardDeal
                      @openDeal="openDeal"
                      v-for="deal in report.deal"
                      :deal="deal"
                      :key="deal.id"

                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-row>
                <v-col>
                  <CardPaidReport v-for="paid in report.paid"
                                  :paid="paid"
                                  :key="paid.id"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-row>
                <v-col>
                  Заказы
                </v-col>
              </v-row>
            </v-card-text>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-row>
                <v-col>
                  Статистика
                </v-col>
              </v-row>
            </v-card-text>
          </v-tab-item>
        </v-tabs>

      </v-card>

    </v-container>
  </v-main>
</template>

<script>
import CardPaidReport from "@/cards/CardPaidReport";
import CardDeal from "@/cards/CardDeal";
import CardClient from "@/cards/CardClient";
import AddSimpleClientPhoto from "@/forms/AddSimpleClientPhotoForm";
import AddOriginalClientPhoto from "@/forms/AddOriginalClientPhotoForm";
import AddCuttedForm from "@/forms/AddCuttedForm";
import AddBigVideo from "@/forms/AddBigVideo";
import AddClientToVideoReport from "@/components/AddClientToVideoReport";

export default {
  name: "PageReport",
  components: {
    AddClientToVideoReport,
    AddBigVideo,
    AddCuttedForm,
    AddOriginalClientPhoto,
    AddSimpleClientPhoto,
    CardClient,
    CardDeal,
    CardPaidReport},
  data() {
    return {
      report: {}
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log(process.env.VUE_APP_BACKENDURL + '/api/v1/' + window.location.pathname.split('/')[2] + '/' + this.id + '/')
    let str = window.location.pathname.split('/')[2]
    this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/' + str.substring(0, str.length - 1) + '/' + this.id + '/').then(response => {
      this.report = response.data.data

    })
  },
  methods: {
    pushClient(client_id){
      this.axios.get(process.env.VUE_APP_BACKENDURL + '/api/v1/client/' + client_id + '/').then(response => {
        this.report.clients_report.push(response.data.data)

      })
    },
    back() {
      this.$router.go(-1)
    },
    openClient(item) {
      console.log(item)
      this.$router.push('/crm/clients/' + item.id)
    },
    openDeal(item) {
      console.log(item)
      this.$router.push('/crm/deals/' + item.id)
    },
    addClients() {
      this.$router.push('/crm/reports/' + this.report.id + '/clients/add')
    },
    addSimple() {
      this.dialog = true
    }
  }
}
</script>

<style scoped>

</style>