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
          <AboutField
            v-if="!section.isSocial || $isMobile"
            :key="`section-${i}`"
            :section="section"
            :index="i"
            :class="!i && $style.field"
            @reveal="isScrolled = !!i"
          >
            <ComponentIndicator
              v-if="!i"
              color="light"
              :class="[
                $style.indicator,
                {
                  [$style.isActive]: isMounted && !isScrolled,
                }
              ]"
            />
          </AboutField>
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
import { Indicator as ComponentIndicator } from '@/components/Indicator'
import { Reveal as ComponentReveal } from '@/components/Reveal'
import { Field as AboutField, Sidebar as AboutSidebar } from './components'

export default {
  name: 'About',
  components: {
    AboutField,
    AboutSidebar,
    ComponentIndicator,
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
  data() {
    return {
      delay: 1000,
      isMounted: false,
      isScrolled: false,
    }
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
  mounted() {
    setTimeout(() => {
      this.isMounted = true
    }, this.delay)
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

  @include bp(sm up) {

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

.field {
  position: relative;
}

.indicator {
  position: absolute;
  top: calc(100% + 2rem);
  right: 0;
  left: 0;
  opacity: 0;
  transition: opacity $smooth;
  pointer-events: none;
}

.isActive {
  opacity: 1;
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
