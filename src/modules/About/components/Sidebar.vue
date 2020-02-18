<template>
  <aside
    ref="reveal"
    :class="$style.container"
  >
    <ComponentReveal
      v-for="(social, i) in socials"
      :key="social.name"
      component="a"
      :is-unrevealed="!isRevealed"
      rel="noopener noreferrer"
      target="_blank"
      :href="social.link"
      :title="social.name"
      :style="{ transitionDelay: `${revealDelay * i}s` }"
    >
      <span :class="$style.link">
        {{ social.name }}
      </span>
    </ComponentReveal>
  </aside>
</template>

<script>
import { Reveal as ComponentReveal } from '@/components/Reveal'
import MixinReveal from '@/mixins/components/reveal'

export default {
  name: 'Sidebar',
  components: {
    ComponentReveal,
  },
  mixins: [MixinReveal],
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

.link {
  font-weight: 700;
  font-size: 6rem;
  font-family: $font-title;
  text-transform: uppercase;
  transition: color $smooth;

  @include bp(lg) {
    font-size: 5rem;
  }

  @include bp(md) {
    font-size: 4rem;
  }

  &:hover {
    color: $main;
  }
}
</style>
