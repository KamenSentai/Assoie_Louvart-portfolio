<template>
  <router-link
    :to="{ name: 'project', params: { slug } }"
    :class="$style.container"
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
    content: "";
    pointer-events: none;
    @include overlay;
  }

  &:hover .cover {
    transform: scale(1.375);
  }
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
  pointer-events: none;

  @include bp(md) {
    font-size: 6rem;
  }

  @include bp(sm) {
    font-size: 4rem;
  }
}
</style>
