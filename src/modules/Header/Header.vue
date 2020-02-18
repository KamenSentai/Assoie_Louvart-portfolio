<template>
  <div :class="$style.container">
    <component
      :is="$isHome ? 'h1' : 'router-link'"
      :to="!$isHome && { name: 'home' }"
      :class="$style.link"
      :title="!$isHome && ($isProject ? 'Assoïe Louvart' : 'About')"
    >
      <!-- Raw text -->
      {{ !$isProject ? 'Assoïe Louvart' : 'Back to my projects' }}
    </component>
    <router-link
      :to="{ name: $isAbout ? 'home' : 'about' }"
      :class="$style.link"
      :title="$isAbout ? 'Assoïe Louvart' : 'About'"
    >
      <!-- Raw text -->
      {{ $isAbout ? 'All projects' : 'About' }}
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
  align-items: center;
  justify-content: space-between;
  padding: 4rem 8rem;

  @include bp(sm) {
    padding: 3rem 2rem;
  }
}

.link {
  font-weight: 400;
  font-size: 1.8rem;
  cursor: pointer;
}
</style>
