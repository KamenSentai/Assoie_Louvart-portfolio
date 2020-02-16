<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isCovering]: isCovering,
        [$style.isDisplayed]: isDisplayed,
      }
    ]"
    :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
  >
    <div
      class="theme-dark"
      :class="$style.wrapper"
    >
      <!-- Raw text -->
      <span :class="$style.text">Discover</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Pin',
  data() {
    return {
      mouse: { x: 0, y: 0 },
      position: { x: 0, y: 0 },
    }
  },
  computed: mapGetters('pin', ['isCovering', 'isDisplayed']),
  created() {
    const widthCenter = window.innerWidth / 2
    const heightCenter = window.innerHeight / 2

    this.mouse = { x: widthCenter, y: heightCenter }
    this.position = { x: widthCenter, y: heightCenter }
  },
  mounted() {
    window.addEventListener('mousemove', this.mouseMove)
    this.loop()
  },
  destroyed() {
    window.removeEventListener('mousemove', this.mouseMove)
    cancelAnimationFrame(this.loop)
  },
  methods: {
    loop() {
      this.position.x += (this.mouse.x - this.position.x) * 0.1
      this.position.y += (this.mouse.y - this.position.y) * 0.1
      requestAnimationFrame(this.loop)
    },
    mouseMove({ clientX: x, clientY: y }) {
      this.mouse = { x, y }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: fixed;
  user-select: none;
  will-change: transform;

  &.isCovering,
  &.isDisplayed {
    z-index: 1;
  }

  &.isCovering .wrapper {
    width: calc(2 * (100vw + 100vh));
    height: calc(2 * (100vw + 100vh));
    transition: width $smooth-slowest, height $smooth-slowest, border-width $smooth-quick;
  }

  &.isDisplayed {

    .wrapper {
      width: 10rem;
      height: 10rem;
      border-width: .1rem;
    }

    .text {
      opacity: 1;
      transition-delay: .25s;
      transition-duration: .25s;
    }
  }
}

.container,
.wrapper {
  pointer-events: none;

  @include centralizer;
}

.wrapper {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  font-size: 1.3rem;
  text-transform: uppercase;
  border: solid 0 $white;
  border-radius: 100%;
  transition: width $smooth, height $smooth, border-width $smooth;
}

.text {
  opacity: 0;
  transition: opacity $smooth-quick;
}
</style>
