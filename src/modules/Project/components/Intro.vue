<template>
  <ComponentReveal
    component="section"
    :class="$style.container"
  >
    <template v-slot:default="{ isRevealed, transitionDelay }">
      <ComponentFade
        :component="ComponentTag"
        :is-unrevealed="!isRevealed"
        :text="intro.tag"
      />
      <ComponentFade
        :component="ComponentTitle"
        :is-unrevealed="!isRevealed"
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
          :is-unrevealed="!isRevealed"
          :title="list.title"
          :items="list.items"
          :style="transitionDelay(index)"
        />
        <ComponentFade
          :component="ComponentParagraph"
          :is-unrevealed="!isRevealed"
          :text="intro.text"
          :style="transitionDelay(lists.length)"
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
    project: {
      type: Object,
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
    intro() {
      return this.project.intro
    },
    lists() {
      return this.intro.lists.map((list) => {
        const { items, title } = list

        return {
          items: items.map(item => (item.key ? this.project[item.key] : item)),
          title,
        }
      })
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
