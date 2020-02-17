<template>
  <component
    :is="component"
    v-bind="$attrs"
    :class="[
      $style.container,
      {
        [$style.isUnrevealed]: !isRevealed,
      }
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Reveal',
  inheritAttrs: false,
  props: {
    component: {
      type: [String, Object],
      required: true,
    },
    isRevealed: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  transition: transform $smooth-slower, opacity $smooth-slower;
}

.isUnrevealed {
  transform: translateY(2.5rem);
  opacity: 0;
}
</style>
