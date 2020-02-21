import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

const { VUE_APP_GA_ID: id } = process.env

Vue.use(VueAnalytics, {
  id,
})
