import { mapActions, mapGetters } from 'vuex'

export default {
  beforeRouteLeave(to, __, next) {
    this.hide()
    this.repulse()

    if (to.name === 'home') {
      this.deactivate()
      this.hideOverlay()

      setTimeout(() => {
        this.destroy()
        next()
      }, this.duration)
    } else if (to.name === 'about') {
      this.expand(() => {
        this.deactivate()
        next()
      })
    } else {
      next()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$ga.page(this.$route.path)
      this.mount()
      this.nailOverlay('bottom')
    })
  },
  computed: mapGetters('overlay', ['duration']),
  methods: {
    ...mapActions('loading', ['destroy', 'mount']),
    ...mapActions('overlay', { hideOverlay: 'hide', nailOverlay: 'nail' }),
    ...mapActions('pin', ['deactivate', 'expand', 'hide', 'repulse']),
  },
}
