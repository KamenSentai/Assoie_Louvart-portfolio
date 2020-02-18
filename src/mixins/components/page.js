import { mapActions, mapGetters } from 'vuex'

export default {
  beforeRouteLeave(to, __, next) {
    if (to.name === 'home') {
      this.hideOverlay()

      setTimeout(() => {
        this.destroy()
        next()
      }, this.duration)
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
  },
}
