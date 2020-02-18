<template>
  <ModuleHome />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ModuleHome from '@/modules/Home'

export default {
  name: 'Home',
  components: {
    ModuleHome,
  },
  data() {
    return {
      from: null,
    }
  },
  computed: mapGetters('overlay', ['duration']),
  beforeRouteEnter(_, from, next) {
    next((vm) => {
      vm.from = from.name
    })
  },
  beforeRouteLeave(to, __, next) {
    this.hide()
    this.repulse()

    if (to.name === 'about') {
      this.expand(next)
    } else if (to.name === 'project') {
      this.cover(next)
    } else {
      next()
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.from) {
        this.mount()
      } else {
        this.$nextTick(() => {
          this.nailOverlay('top')
          this.showOverlay()

          setTimeout(() => {
            this.mount()
          }, this.duration)
        })
      }
    })
  },
  methods: {
    ...mapActions('loading', ['mount']),
    ...mapActions('overlay', { nailOverlay: 'nail', showOverlay: 'show' }),
    ...mapActions('pin', ['cover', 'expand', 'hide', 'repulse']),
  },
}
</script>
