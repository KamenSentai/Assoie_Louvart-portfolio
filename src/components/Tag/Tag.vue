<template>
  <span :class="$style.container">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    text: {
      type: String,
      required: true,
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
