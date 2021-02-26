<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item-content

          v-bind="attrs"
          v-on="on">
        <v-list-item-title>Login</v-list-item-title>
      </v-list-item-content>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>

          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
          >
<!--            <v-text-field-->
<!--                v-model="name"-->
<!--                :counter="10"-->
<!--                :rules="nameRules"-->
<!--                label="Name"-->
<!--                required-->
<!--            ></v-text-field>-->

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                label="Password*"
                type="password"
                required
            ></v-text-field>

            <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
            ></v-checkbox>

          </v-form>


        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" class="mr-4" @click="cancel">Отмена</v-btn>
        <v-btn color="success" class="mr-4" @click="login">Вход</v-btn>
<!--        <v-btn v-else color="success" class="mr-4" @click="putItem">Изменить</v-btn>-->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    password: '',
    user: {},
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
    dialog: false,
  }),
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', {email, password})
          .then(() => {
            console.log(process.env.VUE_APP_BACKENDURL)
            console.log(email + password)
            this.user = this.$store.state.user
            if (this.user.role === 'Checker') {
              console.log('this user is ' + this.user.role)
            }
            this.$router.push('/crm/reports/')
            this.dialog =false
          })
          .catch(error => {
            if (!error.response) {
              // network error
              this.error = 'Error: Network Error';
            } else {
              this.error = error.response.data.message;
            }
          })
    },
    cancel() {
      this.editedItem = this.defaultItem
      this.dialog = false
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
  }
}
</script>
