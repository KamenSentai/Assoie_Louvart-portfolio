import { mapActions } from 'vuex'
import { Overlay as ComponentOverlay } from '@/components/Overlay'

export default {
  components: {
    ComponentOverlay,
  },
  data() {
    return {
      duration: 1000,
      isLeaving: false,
    }
  },
  beforeRouteLeave(to, __, next) {
    if (to.name === 'home') {
      this.isLeaving = true

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
    })
  },
  methods: mapActions('loading', ['destroy', 'mount']),
}
