<template>
  <div
    v-if="!isHidden"
    class="is-dark"
    :class="[
      $style.container,
      {
        [$style.isCompleted]: isCompleted,
      }
    ]"
    :style="transition"
  >
    <div :class="$style.wrapper">
      <svg
        :class="$style.loader"
        :width="size.total"
        :height="size.total"
      >
        <circle
          ref="circle"
          :class="$style.circle"
          :style="style"
          :stroke-width="size.stroke"
          :r="size.radius"
          :cx="size.position"
          :cy="size.position"
        />
      </svg>
      <div :class="$style.title">
        Assoïe Louvart
      </div>
      <div :class="$style.subtitle">
        Digital designer
      </div>
      <div :class="$style.tag">
        {{ progression }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import resources from '@/utils/resources'

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
    ...mapGetters('loading', ['isCompleted', 'progression']),
    circumference() {
      return this.size.radius * 2 * Math.PI
    },
    size() {
      const stroke = 1
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
    style() {
      const { circumference, progression } = this
      const offset = (1 - progression / 100) * circumference

      return {
        strokeDasharray: `${circumference} ${circumference}`,
        strokeDashoffset: `${offset}`,
      }
    },
    transition() {
      return {
        transitionDelay: `${this.delay}ms`,
        transitionDuration: `${this.duration}ms`,
      }
    },
  },
  watch: {
    isCompleted(value) {
      if (value) {
        setTimeout(() => {
          document.documentElement.style.overflow = 'auto'
          this.isHidden = true
        }, this.delay + this.duration + 1)
      }
    },
  },
  mounted() {
    document.documentElement.style.overflow = 'hidden'
    this.load(Object.values(resources))
  },
  methods: mapActions('loading', ['load']),
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
  transition: height ease-in-out;

  &.isCompleted {
    height: 0;
  }
}

.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  font-weight: 700;
  font-size: 2rem;
  font-family: $font-title;
}
</style>
