import Vue from 'vue'
import router from './router'

import App from './App.vue'

import 'normalize.css'
import '@/styles/main.scss'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
