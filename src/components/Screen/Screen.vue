<template>
  <div
    ref="container"
    :class="$style.container"
    :style="{ paddingTop: padding, paddingBottom: padding }"
  >
    <img
      :class="$style.image"
      :src="src"
      :style="transform"
      @load="load"
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
      frameRatio: 0.9375,
      imageRatio: 1,
    }
  },
  computed: {
    padding() {
      return `${100 / this.imageRatio / 2 * this.frameRatio}%`
    },
    transform() {
      const { frameRatio, scrollY, windowHeight } = this
      const { clientHeight, offsetTop } = this.$refs.container || { clientHeight: 0, offsetTop: 0 }
      const from = offsetTop - (windowHeight - clientHeight)
      const to = offsetTop
      const delta = ((scrollY - from) / (to - from) - 0.5) * (1 - frameRatio) * 100

      return {
        transform: `translateY(${delta}%)`,
      }
    },
  },
  methods: {
    load(event) {
      const { srcElement: { naturalWidth, naturalHeight } } = event
      this.imageRatio = naturalWidth / naturalHeight
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  overflow: hidden;
  font-size: 0;
  @include centralizer;
}

.image {
  position: absolute;
  width: 100%;
  transform-origin: center;
  will-change: transform;
}
</style>
