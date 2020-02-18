<template>
  <div :class="$style.container">
    <AboutSidebar
      v-if="!$isMobile"
      :socials="socials"
      :class="$style.aside"
    />
    <div :class="$style.wrapper">
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
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16rem;
  overflow: hidden;

  @include bp(lg) {
    grid-gap: 8rem;
  }

  @include bp(md up) {
    grid-auto-columns: 1fr;
    grid-gap: 4rem;
  }

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
  width: 48rem;
  padding: 4rem 0;

  @include bp(lg) {
    width: 40rem;
  }

  @include bp(md) {
    width: auto;
    padding: 4rem;
  }
}

.aside {
  justify-self: flex-end;
  overflow: auto;
  scrollbar-width: none;
  ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.wrapper {
  max-height: 100%;
  overflow: auto;
}

.main {
  display: grid;
  grid-gap: 9rem;
  justify-self: flex-start;
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
