<template>
  <component
    :is="tag"
    v-if="text"
    :class="[
      $style.container,
      {
        [$style.isLarge]: large && !small,
        [$style.isSmall]: small && !large,
      }
    ]"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    large: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'h1',
    },
    text: {
      type: String,
      default: '',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  font-weight: 700;
  font-size: 6rem;
  font-family: $font-title;

  @include bp(lg) {
    font-size: 4.8rem;
  }

  @include bp(md) {
    font-size: 3.6rem;
  }

  @include bp(sm) {
    font-size: 2.4rem;
  }

  &.isSmall {
    font-size: 4rem;

    @include bp(lg) {
      font-size: 3.8rem;
    }

    @include bp(md) {
      font-size: 3rem;
    }

    @include bp(sm) {
      font-size: 2.2rem;
    }
  }

  &.isLarge {
    font-size: 7rem;

    @include bp(lg) {
      font-size: 5.6rem;
    }

    @include bp(md) {
      font-size: 4rem;
    }

    @include bp(sm) {
      font-size: 2.4rem;
    }
  }
}
</style>
