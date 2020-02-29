import Vue from 'vue'
import env from '@/utils/env'

const ENV = {}

Object.entries(env).forEach((entry) => {
  const [key, value] = entry
  ENV[key] = () => value
})

Vue.mixin({
  computed: {
    ...ENV,
    $isMobile() {
      return this.$mq === 'xs'
    },
    $isTouchDevice() {
      return 'ontouchstart' in window || !!navigator.MaxTouchPoints || !!navigator.msMaxTouchPoints
    },
    $isHome() {
      return this.$route.name === 'home'
    },
    $isAbout() {
      return this.$route.name === 'about'
    },
    $isProject() {
      return this.$route.name === 'project'
    },
  },
  methods: {
    $mod(n, m) {
      return ((n % m) + m) % m
    },
  },
})
