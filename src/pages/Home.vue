<template>
  <ComponentHero :class="$style.container">
    <!-- TODO -->
    <aside :class="$style.aside">
      <div
        v-for="(landing, index) in landings"
        :key="landing.slug"
        :class="$style.bloc"
        :style="translation(index)"
      >
        <span :class="$style.tag">
          {{ landing.year }}
        </span>
      </div>
    </aside>
    <ul>
      <li
        v-for="landing in landings"
        :key="landing.slug"
      >
        <router-link
          :title="landing.name"
          :to="{ name: 'project', params: { slug: landing.slug } }"
        >
          {{ landing.name }}
        </router-link>
      </li>
    </ul>
    <aside :class="$style.navigation" />
    <ComponentIndicator :class="$style.indicator" />
  </ComponentHero>
</template>

<script>
import { mapGetters } from 'vuex'
import { Hero as ComponentHero } from '@/components/Hero'
import { Indicator as ComponentIndicator } from '@/components/Indicator'

export default {
  name: 'Home',
  components: {
    ComponentHero,
    ComponentIndicator,
  },
  data() {
    return {
      currentIndex: 0,
      duration: 1000,
      delay: 500,
      isWheeling: false,
    }
  },
  computed: {
    ...mapGetters('site', ['landings']),
    translation() {
      const { currentIndex, duration } = this

      return index => ({
        transform: `translateY(${(index - currentIndex) * 100}vh)`,
        opacity: currentIndex === index ? 1 : 0,
        transition: `
          transform ${duration}ms,
          opacity ${duration / 2}ms ${currentIndex === index ? duration / 2 : 0}ms
        `,
        transitionTimingFunction: 'ease-in-out',
        willChange: 'transform, opacity',
      })
    },
  },
  mounted() {
    window.addEventListener('wheel', this.wheel)
    window.addEventListener('keydown', this.press)
  },
  destroyed() {
    window.removeEventListener('wheel', this.wheel)
    window.removeEventListener('keydown', this.press)
  },
  methods: {
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
    wheel({ deltaY }) {
      if (!this.isWheeling) {
        if (deltaY !== 0) {
          const { currentIndex, landings: { length } } = this

          if (deltaY > 0) {
            this.currentIndex = Math.min(length - 1, currentIndex + 1)
          } else if (deltaY < 0) {
            this.currentIndex = Math.max(0, currentIndex - 1)
          }

          this.isWheeling = true

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
  grid-gap: 0 10rem;
  grid-template-columns: 12rem 1fr 12rem;
  overflow: hidden;
}

.aside {
  position: relative;
}

.bloc {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tag {
  font-weight: 700;
  font-size: 1.8rem;
  font-family: $font-title;
  letter-spacing: .5rem;
  transform: rotate(-90deg);
  transform-origin: center;
}

.navigation {
  grid-row: span 2;
  background-color: $white;
}

.indicator {
  grid-area: 2 / 2;
}
</style>
