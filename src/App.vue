<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isScreen]: $isHome,
      }
    ]"
  >
    <ModuleLoading />
    <ModuleJumbotron />
    <router-view />
  </div>
</template>

<script>
import ModuleJumbotron from '@/modules/Jumbotron'
import ModuleLoading from '@/modules/Loading'

export default {
  name: 'App',
  components: {
    ModuleJumbotron,
    ModuleLoading,
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  min-height: 100%;

  &.isScreen {
    overflow: hidden;
  }
}
</style>
