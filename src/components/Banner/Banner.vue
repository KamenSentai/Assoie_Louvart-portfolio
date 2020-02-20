<template>
  <ComponentReveal :class="$style.container">
    <template v-slot:default="reveal">
      <ComponentFade
        v-if="title"
        :component="ComponentTitle"
        :is-unrevealed="!reveal.isRevealed"
        tag="h2"
        :text="title"
      />
      <ComponentFade
        v-if="text"
        :component="ComponentParagraph"
        :is-unrevealed="!reveal.isRevealed"
        :text="text"
        :class="$style.paragraph"
        :style="{ transitionDelay: `${reveal.revealDelay}s` }"
      />
    </template>
  </ComponentReveal>
</template>

<script>
import { Fade as ComponentFade } from '@/components/Fade'
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Reveal as ComponentReveal } from '@/components/Reveal'
import { Title as ComponentTitle } from '@/components/Title'

export default {
  name: 'Banner',
  components: {
    ComponentFade,
    ComponentReveal,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      ComponentParagraph,
      ComponentTitle,
    }
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: 12rem;
  grid-template-columns: 1fr 50%;
  justify-content: space-between;
  margin: 0 12rem 14rem;

  @include bp(md) {
    grid-gap: 4rem;
    margin: 0 4rem 8rem;
  }

  @include bp(sm) {
    grid-auto-flow: row;
    margin: 0 3.5rem 4rem;
  }
}

.paragraph {
  padding-top: 2rem;

  @include bp(lg) {
    padding-top: 1rem;
  }

  @include bp(md) {
    padding-top: 0;
  }
}
</style>
