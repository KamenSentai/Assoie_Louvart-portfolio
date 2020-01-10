import Vue from 'vue'
import VueMq from 'vue-mq'

const breakpoints = {
  xs: 720,
  sm: 960,
  md: 1200,
  lg: 1920,
  xl: Infinity,
}

Vue.use(VueMq, {
  breakpoints,
})
