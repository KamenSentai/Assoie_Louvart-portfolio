<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    unilateral: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-rows: 1fr auto;
  align-content: space-between;
}
</style>
