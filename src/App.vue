<template>
  <div :class="$style.container">
    <ModuleLoading />
    <router-view v-if="isCompleted" />
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
  computed: mapGetters('loading', ['isCompleted']),
}
</script>

<style lang="scss" module>
.container {
  width: 100%;
  height: 100%;
}
</style>
