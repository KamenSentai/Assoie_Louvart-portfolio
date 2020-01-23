import Vue from 'vue'
import router from './router'
import store from './store'

import App from './App.vue'

import 'normalize.css'
import '@/plugins/mq'
import '@/styles/main.scss'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
