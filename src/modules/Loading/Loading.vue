<template>
  <div
    v-if="!isHidden"
    class="theme-dark"
    :class="[
      $style.container,
      {
        [$style.isLoaded]: isLoaded,
      }
    ]"
    :style="{
      transitionDelay: `${delay}ms`,
      transitionDuration: `${duration}ms`,
    }"
  >
    <div :class="$style.wrapper">
      <svg
        :class="$style.loader"
        :width="size.total"
        :height="size.total"
      >
        <circle
          :class="$style.circle"
          :style="strokeStyle"
          :stroke-width="size.stroke"
          :r="size.radius"
          :cx="size.position"
          :cy="size.position"
        />
      </svg>
      <div :class="$style.title">
        {{ NAME }}
      </div>
      <div :class="$style.subtitle">
        {{ SPECIALIZATION }}
      </div>
      <div :class="$style.tag">
        {{ progression }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as resources from '@/utils/resources'

export default {
  name: 'Loading',
  data() {
    return {
      delay: 500,
      duration: 1000,
      isHidden: false,
      sizes: {
        xs: 125,
        sm: 150,
        md: 150,
        lg: 150,
        xl: 200,
      },
    }
  },
  computed: {
    ...mapGetters('loading', ['isLoaded', 'progression']),
    circumference() {
      return this.size.radius * 2 * Math.PI
    },
    size() {
      const stroke = 2
      const radius = this.sizes[this.$mq]
      const position = radius + stroke
      const total = position * 2

      return {
        position,
        radius,
        stroke,
        total,
      }
    },
    strokeStyle() {
      const { circumference, progression } = this
      const offset = (1 - progression / 100) * circumference

      return {
        strokeDasharray: `${circumference} ${circumference}`,
        strokeDashoffset: `${offset}`,
      }
    },
  },
  watch: {
    isLoaded(value) {
      if (value) {
        setTimeout(() => {
          if (this.$route.name !== 'home' || this.$isMobile) {
            document.documentElement.style.overflow = 'auto'
          }
          this.isHidden = true
          this.complete()
        }, this.delay + this.duration + 1)
      }
    },
  },
  mounted() {
    document.documentElement.style.overflow = 'hidden'
    this.load(Object.values(resources).map(scope => Object.values(scope)).flat())
  },
  methods: mapActions('loading', ['complete', 'load']),
}
</script>

<style lang="scss" module>
.container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  overflow: hidden;
  text-align: center;
  transition: height $easing;

  &.isLoaded {
    height: 0;
  }
}

.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;

  @include centralizer() {
    flex-direction: column;
  }
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  pointer-events: none;
}

.circle {
  transition: stroke-dashoffset linear .25s;
  fill: transparent;
  stroke: $light;
}

.title {
  margin-top: 2rem;
  font-weight: 600;
  font-size: 2rem;
}

.subtitle {
  margin-top: .5rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.tag {
  font-size: 2rem;
}
</style>
