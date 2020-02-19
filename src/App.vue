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
    <ModuleOverlay />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ModuleJumbotron from '@/modules/Jumbotron'
import ModuleLoading from '@/modules/Loading'
import ModuleOverlay from '@/modules/Overlay'

export default {
  name: 'App',
  components: {
    ModuleJumbotron,
    ModuleLoading,
    ModuleOverlay,
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    window.addEventListener('scroll', this.scroll)
    this.resize()
  },
  destroyed() {
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    ...mapActions('window', { resizeWindow: 'resize', scrollWindow: 'scroll' }),
    resize() {
      this.resizeWindow({ windowWidth: window.innerWidth, windowHeight: window.innerHeight })
    },
    scroll() {
      this.scrollWindow(window.scrollY)
    },
  },
  metaInfo() {
    return {
      title: `${this.SPECIALIZATION} & ${this.STATUS}`,
      titleTemplate: `${this.NAME} — %s`,
    }
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
