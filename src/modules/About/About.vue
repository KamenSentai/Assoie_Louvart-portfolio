<template>
  <div :class="$style.container">
    <AboutSidebar
      v-if="!$isMobile"
      :socials="socials"
      :class="$style.aside"
    />
    <div :class="$style.wrapper">
      <main :class="$style.main">
        <template v-for="(section, i) in content">
          <AboutPage
            v-if="!section.isSocial || $isMobile"
            :key="`section-${i}`"
            :section="section"
            :index="i"
          />
        </template>
        <ComponentReveal
          component="a"
          self
          is-lower
          :class="$style.credits"
        >
          <span class="half-opacity">{{ text.ante }}</span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            :href="coder.site"
            class="link"
          >
            {{ coder.name }}
          </a>
          <span>{{ text.post }}</span>
        </ComponentReveal>
      </main>
    </div>
  </div>
</template>

<script>
import { Page as AboutPage, Sidebar as AboutSidebar } from './components'
import { Reveal as ComponentReveal } from '@/components/Reveal'

export default {
  name: 'About',
  components: {
    AboutPage,
    AboutSidebar,
    ComponentReveal,
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
    credits: {
      type: Object,
      required: true,
    },
  },
  computed: {
    coder() {
      return this.credits.coder
    },
    text() {
      const [ante, post] = this.credits.text.split(this.credits.separator)

      return {
        ante,
        post,
      }
    },
    socials() {
      return this.content.find(section => section.isSocial).list.items
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

  @include bp(md) {
    grid-gap: 7.5rem;
  }

  @include bp(sm) {
    grid-gap: 6rem;
  }
}

.credits {
  margin-top: 9rem;

  @include bp(lg) {
    margin-top: 8rem;
  }

  @include bp(md) {
    margin-top: 7rem;
  }

  @include bp(sm) {
    margin-top: 6rem;
  }
}
</style>
