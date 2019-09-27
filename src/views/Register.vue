<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Register</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          autofocus
          v-model="registerData.fullName"
          label="Full Name"
          type="text"
        />
        <v-text-field
          v-model="registerData.email"
          label="Email"
          type="email"
          prepend-icon="mdi-account-circle"
        />
        <v-text-field
          v-model="registerData.password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
        <v-text-field
          v-model="registerData.passwordConfirm"
          :type="showPassword ? 'text' : 'password'"
          label="Confirm Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
        <v-banner single-line elevation="4" v-show="!passwordsMatch">
          <p>Passwords do not match</p>
        </v-banner>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="info" @click="register">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// import { mapGetters } from 'vuex'
import NProgress from 'nprogress'

export default {
  name: 'RegisterPage',
  props: ['email', 'password'],
  data() {
    return {
      registerData: {
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: ''
      },
      showPassword: false,
      passwordsMatch: true
    }
  },
  methods: {
    register() {
      if (this.registerData.password === this.registerData.passwordConfirm) {
        NProgress.start()
        this.$store
          .dispatch('auth/register', this.registerData)
          .then(authData => {
            NProgress.done()
            this.$router.push({
              name: 'checklists',
              params: { ownerId: authData.user._id }
            })
          })
          .catch(() => {
            NProgress.done()
          })
      } else {
        this.passwordsMatch = false
      }
    }
  },
  mounted() {
    if (this.email) {
      this.registerData = {}
      this.registerData.fullName = ''
      this.registerData.email = this.email
      this.registerData.password = this.password
      this.registerData.passwordConfirm = ''
    }
  }
}
</script>

<style></style>
