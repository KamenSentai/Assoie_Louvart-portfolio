<template>
  <section
    ref="reveal"
    :class="$style.container"
  >
    <!-- Raw text -->
    <ComponentReveal
      :component="ComponentTag"
      :is-unrevealed="!isRevealed"
      text="Intro"
    />
    <ComponentReveal
      :component="ComponentTitle"
      :is-unrevealed="!isRevealed"
      small
      tag="h2"
      :class="$style.title"
      :text="intro.title"
    />
    <div :class="$style.wrapper">
      <ComponentReveal
        v-for="(list, index) in lists"
        :key="`list-${index}`"
        :component="ComponentList"
        :is-unrevealed="!isRevealed"
        :title="list.title"
        :items="list.items"
        :style="{ transitionDelay: `${revealDelay * index}s` }"
      />
      <ComponentReveal
        ref="paragraph"
        :component="ComponentParagraph"
        :is-unrevealed="!isRevealed"
        :text="intro.text"
        :style="{ transitionDelay: `${revealDelay * lists.length}s` }"
      />
    </div>
  </section>
</template>

<script>
import { List as ComponentList } from '@/components/List'
import { Tag as ComponentTag } from '@/components/Tag'
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Reveal as ComponentReveal } from '@/components/Reveal'
import { Title as ComponentTitle } from '@/components/Title'
import MixinReveal from '@/mixins/components/reveal'

export default {
  name: 'Project',
  components: {
    ComponentReveal,
  },
  mixins: [MixinReveal],
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
