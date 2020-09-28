<template>
  <div
    v-if="typeof text === 'object'"
    :class="$style.container"
  >
    <p
      v-for="(line, i) in text"
      :key="`line-${i}`"
    >
      {{ line }}
    </p>
  </div>
  <p
    v-else
    :class="$style.container"
  >
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    text: {
      type: [Array, Number, String],
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.5;

  @include bp(sm) {
    font-size: 1.6rem;
  }
}
</style>
