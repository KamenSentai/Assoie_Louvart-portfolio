<template>
  <div :class="$style.container">
    <AboutSidebar
      v-if="!$isMobile"
      :socials="socials"
    />
    <div :class="$style.wrapper">
      <template v-for="(section, i) in about">
        <AboutPart
          v-if="!section.isSocial || $isMobile"
          :key="`section-${i}`"
          :section="section"
          :index="i"
        />
      </template>
    </div>
    <slot name="overlay" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Part as AboutPart, Sidebar as AboutSidebar } from './components'

export default {
  name: 'About',
  components: {
    AboutPart,
    AboutSidebar,
  },
  computed: {
    ...mapGetters('site', ['about']),
    socials() {
      return this.about.find(section => section.isSocial).list.items
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-auto-columns: 48rem;
  grid-auto-flow: column;
  grid-gap: 16rem;
  justify-content: center;
  padding: 4rem;
  padding-bottom: 12rem;

  @include bp(lg) {
    grid-auto-columns: 40rem;
    grid-gap: 8rem;
    padding-bottom: 10rem;
  }

  @include bp(md) {
    grid-auto-columns: 1fr;
    padding-bottom: 8rem;
  }

  @include bp(sm) {
    padding-bottom: 6rem;
  }
}

.wrapper {
  display: grid;
  grid-gap: 9rem;

  @include bp(md) {
    grid-gap: 7.5rem;
  }

  @include bp(sm) {
    grid-gap: 6rem;
  }
}
</style>
