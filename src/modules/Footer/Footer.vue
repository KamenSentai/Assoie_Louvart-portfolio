<template>
  <router-link
    :to="{ name: 'project', params: { slug } }"
    :class="[
      $style.container,
      {
        [$style.isUnclickable]: isCovering,
      }
    ]"
    :title="name"
  >
    <img
      :src="cover"
      :alt="name"
      :class="$style.cover"
      @mouseover="$emit('mouseover', $event)"
      @mouseout="$emit('mouseout', $event)"
    >
    <span :class="$style.text">{{ name }}</span>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  props: {
    cover: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  computed: mapGetters('pin', ['isCovering']),
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  width: 100%;
  height: 425px;
  overflow: hidden;
  @include centralizer;

  @include bp(sm) {
    height: 290px;
  }

  &::after {
    background-color: rgba($dark, .4);
    opacity: 0;
    transition: opacity $smooth;
    content: "";
    pointer-events: none;
    will-change: opacity;
    @include overlay;
  }

  &:hover {

    &::after {
      opacity: 1;
    }

    .cover {
      transform: scale(1.3125);
    }
  }
}

.isUnclickable {
  pointer-events: none;
}

.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.25);
  transition: transform $smooth;
  will-change: transform;
  @include overlay;
}

.text {
  z-index: 1;
  color: $light;
  font-weight: 700;
  font-size: 8rem;
  font-family: $font-title;
  text-shadow: $text-shadow;
  pointer-events: none;

  @include bp(md) {
    font-size: 6rem;
  }

  @include bp(sm) {
    font-size: 4rem;
  }
}
</style>
