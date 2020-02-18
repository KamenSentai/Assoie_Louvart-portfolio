<template>
  <component
    :is="component"
    v-bind="$attrs"
    :class="[
      $style.container,
      {
        [$style.isLower]: isLower,
        [$style.isUnrevealed]: isUnrevealed,
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
    isLower: {
      type: Boolean,
      default: false,
    },
    isUnrevealed: {
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

.isLower.isUnrevealed {
  transform: translateY(1.25rem);
}

.isUnrevealed {
  transform: translateY(2.5rem);
  opacity: 0;
}
</style>