<template>
  <component
    :is="tag"
    :class="[
      $style.container,
      {
        [$style.isGiant]: giant && !large && !small,
        [$style.isLarge]: large && !small,
        [$style.isSmall]: small && !large,
      }
    ]"
  >
    <template v-for="(line, i) in text.split('\n')">
      <br
        v-if="i"
        :key="`line-${i}`"
      >
      {{ line }}
    </template>
  </component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    giant: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'h1',
    },
    text: {
      type: [Number, String],
      required: true,
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

  &.isGiant {
    font-size: 20rem;

    @include bp(lg) {
      font-size: 16rem;
    }

    @include bp(md) {
      font-size: 12rem;
    }

    @include bp(sm) {
      font-size: 8rem;
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
}
</style>
