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
  computed: {
    ...mapGetters('overlay', ['duration']),
    ...mapGetters('site', ['home']),
  },
  beforeRouteEnter(_, from, next) {
    next((vm) => {
      vm.from = from.name
    })
  },
  beforeRouteLeave(to, __, next) {
    this.hide()
    this.repulse()

    if (to.name === 'about') {
      this.expand(() => {
        this.deactivate()
        next()
      })
    } else if (to.name === 'project') {
      this.cover(() => {
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

      if (!this.from) {
        this.activate()
        this.mount()
      } else {
        this.$nextTick(() => {
          this.nailOverlay('top')
          this.showOverlay()

          setTimeout(() => {
            this.activate()
            this.mount()
          }, this.duration)
        })
      }
    })
  },
  methods: {
    ...mapActions('loading', ['mount']),
    ...mapActions('overlay', { nailOverlay: 'nail', showOverlay: 'show' }),
    ...mapActions('pin', ['activate', 'cover', 'deactivate', 'expand', 'hide', 'repulse']),
  },
  metaInfo() {
    return {
      title: this.home.title,
      meta: [
        {
          name: 'description',
          content: this.home.description,
        },
      ],
    }
  },
}
</script>
