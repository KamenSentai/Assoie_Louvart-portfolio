<template>
  <aside :class="$style.aside">
    <a
      v-for="social in socials"
      :key="social.name"
      rel="noopener noreferrer"
      target="_blank"
      :href="social.link"
      :title="social.name"
      :class="$style.link"
    >
      {{ social.name }}
    </a>
  </aside>
</template>

<script>
export default {
  name: 'About',
  props: {
    socials: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.aside {
  display: grid;
  grid-gap: 9rem;
  align-content: flex-start;
  padding: 16rem 0 4rem;

  @include bp(lg) {
    grid-gap: 7.5rem;
  }

  @include bp(md) {
    grid-gap: 6rem;
  }
}

.link {
  font-weight: 700;
  font-size: 7rem;
  font-family: $font-title;
  text-transform: uppercase;

  @include bp(lg) {
    font-size: 5rem;
  }

  @include bp(md) {
    font-size: 3rem;
  }
}
</style>
