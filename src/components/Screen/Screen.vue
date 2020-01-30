<template>
  <img
    v-if="src"
    :class="$style.image"
    :src="src"
  >
</template>

<script>
export default {
  name: 'Screen',
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
.image {
  width: 100%;
}
</style>
