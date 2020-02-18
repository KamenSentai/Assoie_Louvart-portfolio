<template>
  <div
    :class="[
      $style.container,
      {
        ['theme-dark']: $isAbout || $isProject,
        [$style.isScreen]: $isHome || $isAbout,
      }
    ]"
  >
    <ModuleLoading />
    <ModuleJumbotron />
    <router-view />
    <ModulePin />
    <ModuleOverlay />
  </div>
</template>

<script>
import ModuleJumbotron from '@/modules/Jumbotron'
import ModuleLoading from '@/modules/Loading'
import ModuleOverlay from '@/modules/Overlay'
import ModulePin from '@/modules/Pin'

export default {
  name: 'App',
  components: {
    ModuleJumbotron,
    ModuleLoading,
    ModuleOverlay,
    ModulePin,
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

    @include bp(sm up) {
      max-height: 100%;
    }
  }
}
</style>
