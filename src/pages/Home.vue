<template>
  <ModuleHome>
    <ComponentOverlay
      v-if="!!from"
      slot="overlay"
      :duration="duration"
      :is-leaving="isEntering"
      origin="top"
    />
  </ModuleHome>
</template>

<script>
import { mapActions } from 'vuex'
import ModuleHome from '@/modules/Home'
import { Overlay as ComponentOverlay } from '@/components/Overlay'

export default {
  name: 'Home',
  components: {
    ModuleHome,
    ComponentOverlay,
  },
  data() {
    return {
      duration: 1000,
      from: null,
      isEntering: true,
    }
  },
  beforeRouteEnter(_, from, next) {
    next((vm) => {
      vm.from = from.name
    })
  },
  beforeRouteLeave(to, __, next) {
    this.hide()

    if (to.name === 'project') {
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
          this.isEntering = false
        })

        setTimeout(() => {
          this.mount()
        }, this.duration)
      }
    })
  },
  methods: {
    ...mapActions('loading', ['mount']),
    ...mapActions('pin', ['cover', 'hide']),
  },
}
</script>
