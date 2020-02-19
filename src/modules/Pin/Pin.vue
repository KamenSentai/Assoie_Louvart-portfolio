<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isActivated]: isActivated,
        [$style.isAttracted]: isAttracted,
        [$style.isCovering]: isCovering,
        [$style.isDisplayed]: isDisplayed,
        [$style.isExpanding]: isExpanding,
      }
    ]"
    :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
  >
    <div :class="$style.wrapper">
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
  computed: mapGetters('pin', [
    'isActivated',
    'isAttracted',
    'isCovering',
    'isDisplayed',
    'isExpanding',
    'target',
  ]),
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
      this.mouse = this.target || { x, y }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: fixed;
  top: 0;
  user-select: none;
  will-change: transform;

  &:not(.isActivated) .wrapper {
    opacity: 0;
  }

  &.isActivated {

    &.isCovering,
    &.isDisplayed {
      z-index: 1;
    }

    &.isCovering,
    &.isExpanding {

      .wrapper {
        width: calc(2 * (100vw + 100vh));
        height: calc(2 * (100vw + 100vh));
        transition: width $smooth-slowest,
          height $smooth-slowest,
          background $smooth,
          border-width $smooth-quick,
          opacity $smooth
        ;
      }
    }

    &.isAttracted,
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

    &.isAttracted,
    &.isExpanding {

      .wrapper {
        @include theme(main);
      }
    }

    &.isAttracted {

      .wrapper {
        border-width: 0;
      }

      .text {
        display: none;
      }
    }

    &.isExpanding .wrapper {
      background: radial-gradient(circle at center, $main, $dark);

      &::after {
        opacity: 1;
      }
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
  transition: width $smooth,
    height $smooth,
    background $smooth,
    border-width $smooth,
    opacity $smooth
  ;
  @include theme(dark);

  &::after {
    background-color: $dark;
    border-radius: 100%;
    opacity: 0;
    transition: opacity $smooth;
    content: "";
    @include overlay;
  }
}

.text {
  opacity: 0;
  transition: opacity $smooth-quick;
}
</style>
