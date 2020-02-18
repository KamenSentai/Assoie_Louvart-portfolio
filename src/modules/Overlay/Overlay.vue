<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isHidding]: isHidding,
      }
    ]"
    :style="{
      transformOrigin: origin,
      transitionDuration: `${duration}ms`,
    }"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Overlay',
  computed: mapGetters('overlay', ['duration', 'isHidding', 'origin']),
}
</script>

<style lang="scss" module>
.container {
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
