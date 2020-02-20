<template>
  <ComponentReveal
    component="section"
    :class="$style.container"
  >
    <template v-slot:default="reveal">
      <!-- Raw text -->
      <ComponentFade
        :component="ComponentTag"
        :is-unrevealed="!reveal.isRevealed"
        text="Intro"
      />
      <ComponentFade
        :component="ComponentTitle"
        :is-unrevealed="!reveal.isRevealed"
        small
        tag="h2"
        :class="$style.title"
        :text="intro.title"
      />
      <div :class="$style.wrapper">
        <ComponentFade
          v-for="(list, index) in lists"
          :key="`list-${index}`"
          :component="ComponentList"
          :is-unrevealed="!reveal.isRevealed"
          :title="list.title"
          :items="list.items"
          :style="{ transitionDelay: `${reveal.revealDelay * index}s` }"
        />
        <ComponentFade
          ref="paragraph"
          :component="ComponentParagraph"
          :is-unrevealed="!reveal.isRevealed"
          :text="intro.text"
          :style="{ transitionDelay: `${reveal.revealDelay * lists.length}s` }"
        />
      </div>
    </template>
  </ComponentReveal>
</template>

<script>
import { Fade as ComponentFade } from '@/components/Fade'
import { List as ComponentList } from '@/components/List'
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Reveal as ComponentReveal } from '@/components/Reveal'
import { Tag as ComponentTag } from '@/components/Tag'
import { Title as ComponentTitle } from '@/components/Title'

export default {
  name: 'Project',
  components: {
    ComponentFade,
    ComponentReveal,
  },
  props: {
    intro: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      ComponentList,
      ComponentParagraph,
      ComponentTag,
      ComponentTitle,
    }
  },
  computed: {
    lists() {
      return [
        {
          title: 'Role', // Raw text
          items: this.intro.roles,
        },
        {
          title: 'What', // Raw text
          items: [this.type, this.year.toString()],
        },
      ]
    },
  },
}
</script>

<style lang="scss" module>
.container {
  padding: 20rem 22rem;

  @include theme(light);

  @include bp(lg) {
    padding: 20rem 12rem;
  }

  @include bp(md) {
    padding: 8rem 4rem;
  }

  @include bp(sm) {
    padding: 8rem 3.5rem 6rem;
  }
}

.title {
  margin-bottom: 12rem;

  @include bp(sm) {
    margin-bottom: 4rem;
  }

  &::after {
    display: inline-block;
    width: 60px;
    height: 2px;
    margin: 0 .25em .25em;
    background-color: $dark;
    content: "";

    @include bp(sm) {
      width: 35px;
    }
  }
}

.wrapper {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10rem;
  justify-content: space-between;

  @include bp(sm) {
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    grid-gap: 4rem;

    > *:last-child {
      grid-column: span 2;
    }
  }
}
</style>
