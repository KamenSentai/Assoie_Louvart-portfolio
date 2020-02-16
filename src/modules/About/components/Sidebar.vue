<template>
  <aside :class="$style.container">
    <div :class="$style.wrapper">
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
    </div>
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
.container {
  padding-top: 16rem;
}

.wrapper {
  position: sticky;
  top: 6rem;
  display: grid;
  grid-gap: 6rem;
  align-content: flex-start;

  @include bp(lg) {
    grid-gap: 5rem;
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
    font-size: 3rem;
  }
}
</style>
