import { mapActions } from 'vuex'

export default {
  mounted() {
    this.$nextTick(() => {
      this.mount()
    })
  },
  methods: mapActions('loading', ['mount']),
}
