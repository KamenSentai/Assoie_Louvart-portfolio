<template>
  <span
    :class="$style.container"
    :data-color="color"
  >
    <!-- Raw text -->
    Scroll
  </span>
</template>

<script>
export default {
  name: 'Indicator',
  props: {
    color: {
      type: String,
      default: 'dark',
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  justify-self: center;
  margin: 5rem 8rem;
  font-size: 1.5rem;
  text-align: center;
  transform: rotate(-90deg);
  user-select: none;
  $spacing: .5rem;

  @include bp(sm) {
    margin: 3rem 2rem;
  }

  @each $color, $list in $colors {

    &[data-color="#{$color}"] {

      &::before {
        border-right: $spacing solid nth($list, 1);
      }

      &::after {
        background-color: nth($list, 1);
      }
    }
  }

  &::before,
  &::after {
    position: absolute;
    bottom: calc(100% + 1rem);
    content: "";
  }

  &::before {
    right: 100%;
    border-top: $spacing solid transparent;
    border-bottom: $spacing solid transparent;
    border-left: $spacing solid transparent;
    transform: translate(50%, 50%) scaleY(.75);
  }

  &::after {
    right: 0;
    left: $spacing;
    height: .25rem;
    transform: translateY(50%);
  }
}
</style>
