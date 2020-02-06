<template>
  <ModuleHome />
</template>

<script>
import { mapActions } from 'vuex'
import ModuleHome from '@/modules/Home'

export default {
  name: 'Home',
  components: {
    ModuleHome,
  },
  beforeRouteLeave(to, __, next) {
    this.hide()

    if (to.name === 'project') {
      this.cover(next)
    } else {
      next()
    }
  },
  methods: mapActions('pin', ['cover', 'hide']),
}
</script>
