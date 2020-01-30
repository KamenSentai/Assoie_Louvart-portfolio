<template>
  <span
    v-if="text"
    :class="$style.container"
  >
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'Tag',
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
  display: inline-block;
  margin-bottom: 1rem;;
  font-weight: 600;
  font-size: 1.8rem;
  text-transform: uppercase;

  @include bp(sm) {
    font-size: 1.6rem;
  }
}
</style>
