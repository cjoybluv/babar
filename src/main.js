import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store/store'
import 'nprogress/nprogress.css'

import dotenv from 'dotenv'
dotenv.config()

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
