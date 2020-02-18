<template>
  <aside :class="$style.container">
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
  name: 'Sidebar',
  props: {
    socials: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: sticky;
  top: 0;
  bottom: 0;
  display: grid;
  grid-gap: 5rem;
  align-content: flex-start;

  @include bp(lg) {
    grid-gap: 4rem;
  }

  @include bp(md) {
    grid-gap: 3rem;
  }
}

.link {
  font-weight: 700;
  font-size: 6rem;
  font-family: $font-title;
  text-transform: uppercase;

  @include bp(lg) {
    font-size: 5rem;
  }

  @include bp(md) {
    font-size: 4rem;
  }
}
</style>
