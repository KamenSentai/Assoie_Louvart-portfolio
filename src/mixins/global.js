import Vue from 'vue'

Vue.mixin({
  computed: {
    NAME() {
      return process.env.VUE_APP_NAME
    },
    SPECIALIZATIOON() {
      return process.env.VUE_APP_SPECIALIZATIOON
    },
    $isMobile() {
      return this.$mq === 'xs'
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
