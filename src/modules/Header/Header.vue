<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isFixed]: isHome,
      }
    ]"
  >
    <component
      :is="isHome ? 'h1' : 'router-link'"
      :to="!isHome && { name: 'home' }"
      :class="$style.title"
    >
      {{ isHome || isAbout ? 'Assoïe Louvart' : 'Back to my projects' }}
    </component>
    <router-link
      :to="{ name: 'about' }"
      :class="$style.link"
    >
      About
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  computed: {
    isHome() {
      return this.$route.name === 'home'
    },
    isAbout() {
      return this.$route.name === 'about'
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  justify-content: space-between;
  padding: 5rem 8rem;

  @include bp(sm) {
    padding: 3rem 2rem;
  }

  &.isFixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
}

.title,
.link {
  font-weight: 500;
  font-size: 1.8rem;
  cursor: pointer;
}
</style>
