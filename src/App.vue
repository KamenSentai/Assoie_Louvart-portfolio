<template>
  <div :class="$style.container">
    <ModuleLoading />
    <ModuleHeader />
    <router-view v-if="isCompleted" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModuleHeader from '@/modules/Header'
import ModuleLoading from '@/modules/Loading'

export default {
  name: 'App',
  components: {
    ModuleHeader,
    ModuleLoading,
  },
  computed: mapGetters('loading', ['isCompleted']),
}
</script>

<style lang="scss" module>
.container {
  width: 100%;
  height: 100%;
}
</style>
