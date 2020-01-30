<template>
  <router-link
    :to="{ name: 'project', params: { slug } }"
    :class="$style.container"
  >
    <img
      :src="cover"
      :alt="name"
      :class="$style.cover"
    >
    <span :class="$style.text">
      {{ name }}
    </span>
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 425px;
  overflow: hidden;

  @include bp(sm) {
    height: 290px;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(4, 29, 35, .4);
    content: "";
  }

  &:hover .cover {
    transform: scale(1.5);
  }
}

.cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.25);
  transition: transform .5s ease-in-out;
  will-change: transform;
}

.text {
  z-index: 1;
  color: $white;
  font-weight: 700;
  font-size: 8rem;
  font-family: $font-title;

  @include bp(md) {
    font-size: 6rem;
  }

  @include bp(sm) {
    font-size: 4rem;
  }
}
</style>
