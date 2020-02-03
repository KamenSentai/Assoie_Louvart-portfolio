import Vue from 'vue'

Vue.mixin({
  computed: {
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
