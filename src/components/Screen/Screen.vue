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
    scrollY: {
      type: Number,
      required: true,
    },
    windowHeight: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      rate: 25,
    }
  },
  computed: {
    transform() {
      const { rate, scrollY, windowHeight } = this
      const { clientHeight, offsetTop } = this.$refs.container || { clientHeight: 0, offsetTop: 0 }
      const from = offsetTop - windowHeight
      const to = offsetTop + clientHeight
      const delta = rate * ((scrollY - from) / (to - from) - 0.5)

      return {
        transform: `translateY(${delta}%) scale(1.${rate})`,
      }
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
