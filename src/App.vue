<template>
  <div :class="$style.container">
    <ModuleLoading />
    <ModuleJumbotron />
    <router-view v-if="isCompleted" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModuleJumbotron from '@/modules/Jumbotron'
import ModuleLoading from '@/modules/Loading'

export default {
  name: 'App',
  components: {
    ModuleJumbotron,
    ModuleLoading,
  },
  computed: {
    ...mapGetters('loading', ['isCompleted']),
    hasHero() {
      return this.$isHome || this.$isProject
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  min-height: 100%;
}
</style>
