<template>
  <ComponentReveal
    component="aside"
    :class="$style.container"
  >
    <template v-slot:default="reveal">
      <ComponentFade
        v-for="(social, i) in socials"
        :key="social.name"
        component="a"
        :is-unrevealed="!reveal.isRevealed"
        rel="noopener noreferrer"
        target="_blank"
        :href="social.link"
        :title="social.name"
        :class="$style.link"
        :style="{ transitionDelay: `${reveal.revealDelay * i}s` }"
      >
        <span
          class="link"
          :class="$style.text"
        >
          {{ social.name }}
        </span>
      </ComponentFade>
    </template>
  </ComponentReveal>
</template>

<script>
import { Fade as ComponentFade } from '@/components/Fade'
import { Reveal as ComponentReveal } from '@/components/Reveal'

export default {
  name: 'Sidebar',
  components: {
    ComponentFade,
    ComponentReveal,
  },
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

.link:last-child {
  padding-bottom: 4rem;
}

.text {
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
