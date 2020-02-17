<template>
  <div
    ref="container"
    :class="$style.container"
  >
    <img
      :class="$style.image"
      :src="src"
      :style="transform"
    >
  </div>
</template>

<script>
export default {
  name: 'Screen',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      delta: 0,
      rate: 25,
      windowHeight: 0,
    }
  },
  computed: {
    transform() {
      return {
        transform: `translateY(${this.delta}%) scale(1.${this.rate})`,
      }
    },
  },
  mounted() {
    this.windowHeight = window.innerHeight

    window.addEventListener('resize', this.resize)
    window.addEventListener('scroll', this.scroll)
  },
  destroyed() {
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    resize() {
      this.windowHeight = window.innerHeight
    },
    scroll() {
      const { rate, windowHeight } = this
      const { clientHeight, offsetTop } = this.$refs.container
      const from = offsetTop - windowHeight
      const to = offsetTop + clientHeight
      this.delta = rate * ((window.scrollY - from) / (to - from) - 0.5)
    },
  },
}
</script>

<style lang="scss" module>
.container {
  overflow: hidden;
  font-size: 0;
}

.image {
  width: 100%;
  height: 100%;
  transform-origin: center;
  will-change: transform;
}
</style>
