<template>
  <div
    :class="$style.container"
    @touchstart="$emit('touchstart', $event)"
    @touchmove="$emit('touchmove', $event)"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-rows: 1fr auto;
  align-content: space-between;
}
</style>
