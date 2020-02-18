<template>
  <div :class="$style.container">
    <div :class="$style.wrapper">
      <AboutSidebar
        v-if="!$isMobile"
        :socials="socials"
        :class="$style.aside"
      />
      <main :class="$style.main">
        <template v-for="(section, i) in about">
          <AboutPage
            v-if="!section.isSocial || $isMobile"
            :key="`section-${i}`"
            :section="section"
            :index="i"
          />
        </template>
      </main>
      <slot name="overlay" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Page as AboutPage, Sidebar as AboutSidebar } from './components'

export default {
  name: 'About',
  components: {
    AboutPage,
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
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 1;
    height: 4rem;
    content: "";
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(to top, gradient(dark));
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to bottom, gradient(dark));
  }
}

.aside,
.main {
  padding: 4rem 0;
}

.wrapper {
  display: grid;
  grid-auto-columns: 48rem;
  grid-auto-flow: column;
  grid-gap: 16rem;
  align-items: flex-start;
  justify-content: center;
  max-height: 100%;
  padding: 0 4rem;
  overflow: auto;

  @include bp(lg) {
    grid-auto-columns: 40rem;
    grid-gap: 8rem;
  }

  @include bp(md) {
    grid-auto-columns: 1fr;
  }
}

.main {
  display: grid;
  grid-gap: 9rem;
  padding-bottom: 12rem;

  @include bp(md) {
    grid-gap: 7.5rem;
  }

  @include bp(sm) {
    grid-gap: 6rem;
    padding-bottom: 8rem;
  }
}
</style>
