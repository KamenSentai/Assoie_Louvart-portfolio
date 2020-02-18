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
  transform: scaleY(0);
  transition-timing-function: $easing;
  transition-property: transform;
  pointer-events: none;
  will-change: transform;

  @include theme(dark);

  @include overlay(fixed) {
    z-index: 1;
  }
}

.isHidding {
  transform: scaleY(1);
}
</style>
