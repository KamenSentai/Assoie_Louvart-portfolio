import { mapActions, mapGetters } from 'vuex'

export default {
  beforeRouteLeave(to, __, next) {
    this.hide()
    this.repulse()

    if (to.name === 'home') {
      this.hideOverlay()

      setTimeout(() => {
        this.destroy()
        next()
      }, this.duration)
    } else if (to.name === 'about') {
      this.expand(next)
    } else {
      next()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.mount()
      this.nailOverlay('bottom')
    })
  },
  computed: mapGetters('overlay', ['duration']),
  methods: {
    ...mapActions('loading', ['destroy', 'mount']),
    ...mapActions('overlay', { hideOverlay: 'hide', nailOverlay: 'nail' }),
    ...mapActions('pin', ['expand', 'hide', 'repulse']),
  },
}
