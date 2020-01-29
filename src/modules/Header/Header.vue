<template>
  <div :class="$style.container">
    <component
      :is="$isHome ? 'h1' : 'router-link'"
      :to="!$isHome && { name: 'home' }"
      :class="$style.title"
    >
      {{ $isHome || $isAbout ? 'Assoïe Louvart' : 'Back to my projects' }}
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
  name: 'Header',
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
}

.title,
.link {
  font-weight: 500;
  font-size: 1.8rem;
  cursor: pointer;
}
</style>
