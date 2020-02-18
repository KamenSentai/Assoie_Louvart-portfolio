<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isScreen]: $isHome || $isAbout,
      }
    ]"
  >
    <ModuleLoading />
    <ModuleJumbotron />
    <router-view />
    <ModulePin />
  </div>
</template>

<script>
import ModulePin from '@/modules/Pin'
import ModuleJumbotron from '@/modules/Jumbotron'
import ModuleLoading from '@/modules/Loading'

export default {
  name: 'App',
  components: {
    ModulePin,
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

    @include bp(sm up) {
      max-height: 100%;
    }
  }
}
</style>
