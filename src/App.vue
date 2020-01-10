<template>
  <div :class="$style.container">
    <ModuleLoading />
    <router-view v-if="isLoaded" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModuleLoading from '@/modules/Loading'

export default {
  name: 'App',
  components: {
    ModuleLoading,
  },
  computed: mapGetters('loading', ['isLoaded']),
}
</script>

<style lang="scss" module>
.container {
  width: 100%;
  height: 100%;
}
</style>
