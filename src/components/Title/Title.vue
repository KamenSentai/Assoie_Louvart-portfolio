<template>
  <h2
    v-if="text"
    :class="$style.container"
  >
    {{ text }}
  </h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
.container {
  font-weight: 700;
  font-size: 4rem;
  font-family: $font-title;

  @include bp(sm) {
    font-size: 2.2rem;
  }
}
</style>
