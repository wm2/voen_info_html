<template>
  <v-main>
    <v-container fluid>
      <v-form ref="form"
      >


        <v-file-input
            v-model="file"
            accept="text/csv"
            label="File input"
        ></v-file-input>

      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" class="mr-4" @click="send">Добавить</v-btn>
      </v-card-actions>

      <p v-for="(a, index) in elements" :key="index">
        Часть : {{ index }}
        <span>
          Сумма: {{ a.summa }}
          Кол-во: {{ a.cnt }}
          Среднее: {{ a.middle }}

        </span>
      </p>
    </v-container>
  </v-main>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    file: [],

    elements: []

  }),
  methods: {
    send() {
      let formData = new FormData();
      formData.append('file', this.file);
      this.axios.post( process.env.VUE_APP_BACKENDURL + '/api/v1/csv/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(response => {
        this.elements = response.data.data
        console.log(response.data.data)
        console.log('SUCCESS!!');
      })
          .catch(function(){
            console.log('FAILURE!!');
          });
    },
  }
}
</script>
