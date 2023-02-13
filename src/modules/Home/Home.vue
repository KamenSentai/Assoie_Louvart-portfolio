<template>
  <ComponentHero
    :class="$style.container"
    @touchstart="touchStart"
    @touchmove="touchMove"
  >
    <HomeSidebar
      v-if="!$isMobile"
      :duration="duration"
      :is-carousel="isCarousel"
      :landings="landings"
      :saved-index="savedIndex"
    />
    <HomeHero
      :duration="duration"
      :is-carousel="isCarousel"
      :is-completed="isMounted && isCompleted"
      :landings="landings"
      :saved-index="savedIndex"
    />
    <HomeNavigation
      v-if="!$isMobile"
      :duration="duration"
      :length="landings.length"
      :marks="marks"
      :navigated="navigated"
      :saved-index="savedIndex"
      @click="wheel($event)"
    />
    <HomeIndicator
      v-if="!$isMobile"
      :has-scrolled="hasScrolled"
      :is-completed="isMounted && isCompleted"
      @click="wheel({ deltaY: 1 })"
    />
  </ComponentHero>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Hero as ComponentHero } from '@/components/Hero'
import {
  Hero as HomeHero,
  Indicator as HomeIndicator,
  Navigation as HomeNavigation,
  Sidebar as HomeSidebar,
} from './components'

export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeIndicator,
    HomeNavigation,
    HomeSidebar,
    ComponentHero,
  },
  data() {
    return {
      duration: 1000,
      delay: 500,
      navigated: 0,
      isWheeling: false,
      hasScrolled: false,
      touchPosition: 0,
    }
  },
  computed: {
    ...mapGetters('loading', ['isCompleted', 'isLoaded', 'isMounted']),
    ...mapGetters('site', ['landings', 'savedIndex']),
    isCarousel() {
      return this.landings.length > 2
    },
    marks() {
      return this.landings.length + 2
    },
  },
  mounted() {
    window.addEventListener('wheel', this.wheel)
    window.addEventListener('keydown', this.press)
    window.addEventListener('resize', this.resize)
    this.resize()
  },
  destroyed() {
    document.documentElement.style.overflow = 'auto'
    window.removeEventListener('wheel', this.wheel)
    window.removeEventListener('keydown', this.press)
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    ...mapActions('site', ['updateIndex']),
    press({ keyCode }) {
      switch (keyCode) {
        case 38:
          this.wheel({ deltaY: -1 })
          break
        case 40:
          this.wheel({ deltaY: 1 })
          break
        // no default
      }
    },
    resize() {
      document.documentElement.style.overflow = this.isLoaded && this.$isMobile ? 'auto' : 'hidden'
    },
    touchMove({ touches }) {
      const [{ clientY: y }] = touches
      const movementY = y - this.touchPosition
      this.touchPosition = y
      this.wheel({ deltaY: -movementY })
    },
    touchStart({ touches }) {
      const [{ clientY: y }] = touches
      this.touchPosition = y
    },
    wheel({ deltaY }) {
      if (!this.isWheeling && this.isCompleted) {
        if (deltaY !== 0) {
          const {
            savedIndex,
            isCarousel,
            navigated,
            marks,
            landings: { length },
          } = this

          if (deltaY > 0) {
            this.updateIndex(isCarousel
              ? this.$mod(savedIndex + 1, length)
              : Math.min(length - 1, savedIndex + 1))
            this.navigated = isCarousel
              ? this.$mod(navigated + 1, marks)
              : Math.min(marks - 1, navigated + 1)
          } else {
            this.updateIndex(isCarousel
              ? this.$mod(savedIndex - 1, length)
              : Math.max(0, savedIndex - 1))
            this.navigated = isCarousel
              ? this.$mod(navigated - 1, marks)
              : Math.max(0, navigated - 1)
          }

          this.isWheeling = true
          this.hasScrolled = true

          setTimeout(() => {
            this.isWheeling = false
          }, this.duration + this.delay)
        }
      }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  grid-gap: 4rem 10rem;
  grid-template-columns: 12rem 1fr 12rem;
  margin-top: 4rem;

  @include bp(lg) {
    grid-gap: 2rem 8rem;
  }

  @include bp(md) {
    grid-gap: 2rem 6rem;
  }

  @include bp(sm) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
}
</style>
