<template>
  <div
    :class="[
      $style.overlay,
      {
        [$style.isHidding]: isLeaving,
      }
    ]"
    :style="{
      transformOrigin: origin,
      transitionDuration: `${duration}ms`,
    }"
  />
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    duration: {
      type: Number,
      default: 1000,
    },
    isLeaving: {
      type: Boolean,
      default: false,
    },
    origin: {
      type: String,
      default: 'bottom',
    },
  },
}
</script>

<style lang="scss" module>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  transform: scaleY(0);
  transition-timing-function: ease-in-out;
  transition-property: transform;
  pointer-events: none;
  will-change: transform;

  @include theme(dark);
}

.isHidding {
  transform: scaleY(1);
}
</style>
