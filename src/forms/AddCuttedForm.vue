<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item-content

          v-bind="attrs"
          v-on="on">
        <v-btn color="success"  >+ Нарезки</v-btn>
      </v-list-item-content>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">+ Нарезки</span>
      </v-card-title>
      <v-card-text>
        <v-container>

          <v-form
              ref="form"
              lazy-validation
          >
            <v-file-input
                v-model="files"
                color="deep-purple accent-4"
                counter
                multiple
                placeholder="Нарезки"
                prepend-icon="mdi-paperclip"
                outlined
                :show-size="1000"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip
                    v-if="index < 2"
                    color="deep-purple accent-4"
                    dark
                    label
                    small
                >
                  {{ text }}
                </v-chip>

                <span
                    v-else-if="index === 2"
                    class="overline grey--text text--darken-3 mx-2"
                >
          +{{ files.length - 2 }} File(s)
        </span>
              </template>
            </v-file-input>
          </v-form>

        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" class="mr-4" @click="cancel">Отмена</v-btn>
        <v-btn color="success" class="mr-4" @click="upload">Загрузить</v-btn>
        <!--        <v-btn v-else color="success" class="mr-4" @click="putItem">Изменить</v-btn>-->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddCuttedForm",
  props: {
    report_id: {
      type: String
    }
  },
  data: () => ({
    files: [],
    dialog: false
  }),
  methods: {
    cancel() {
      this.dialog = false
    },
    upload() {
      let formData = new FormData();
      for (let i = 0; i < this.files.length; i++) {
        console.log(this.files[i])
        formData.append('file_' + i, this.files[i], this.files[i].name);
      }
      // formData.append('files', this.files);
      this.axios.post(process.env.VUE_APP_BACKENDURL + '/api/v1/report/' + this.report_id + '/cut/add',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(response => {
        this.elements = response.data.data
        this.dialog = false
        console.log(response.data.data)
        console.log('SUCCESS!!');
      })
          .catch(function () {
            console.log('FAILURE!!');
          });
    }
  }
}
</script>

<style scoped>

</style>