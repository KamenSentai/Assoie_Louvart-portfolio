<template>
  <img
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
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.image {
  width: 100%;
}
</style>
