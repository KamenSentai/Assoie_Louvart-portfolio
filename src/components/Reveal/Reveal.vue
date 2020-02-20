<template>
  <component
    :is="self ? ComponentFade : component"
    v-bind="$attrs"
    :component="self && component"
    :is-unrevealed="self && !isRevealed"
  >
    <slot
      :isRevealed="isRevealed"
      :revealDelay="revealDelay"
    />
  </component>
</template>

<script>
import { Fade as ComponentFade } from '@/components/Fade'

export default {
  name: 'Reveal',
  props: {
    component: {
      type: [Object, String],
      default: 'div',
    },
    self: {
      type: Boolean,
      default: false,
    },
    threshold: {
      type: Number,
      default: 0.375,
    },
  },
  data() {
    return {
      ComponentFade,
      isRevealed: false,
      revealDelay: 0.25,
    }
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.observe()
      })
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.observe()
    })
  },
  methods: {
    observe() {
      Object.assign(this.$data, this.$options.data())

      const { $el: element, threshold } = this

      new IntersectionObserver((entries, self) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > self.thresholds[0]) {
            this.isRevealed = true
            this.$emit('reveal')
            self.unobserve(entry.target)
          }
        })
      }, {
        root: null,
        rootMargin: '0px',
        threshold,
      }).observe(element.$el || element)
    },
  },
}
</script>
