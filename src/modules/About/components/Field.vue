<template>
  <ComponentReveal
    component="section"
    @reveal="index && $emit('reveal')"
  >
    <template v-slot:default="reveal">
      <ComponentFade
        :component="ComponentTitle"
        :is-unrevealed="!reveal.isRevealed"
        :large="!index"
        :small="!!index"
        :tag="section.title.tag"
        :text="section.title.text"
        :class="$style.title"
      />
      <ComponentFade
        v-if="section.paragraph"
        :component="ComponentParagraph"
        :is-unrevealed="!reveal.isRevealed"
        :text="section.paragraph"
        :style="reveal.transitionDelay()"
      />
      <div
        v-else-if="section.list"
        :class="$style.list"
      >
        <div
          v-for="(item, j) in section.list.items"
          :key="`item-${index}-${j}`"
          :class="[
            $style[section.list.class],
            {
              [$style.isInline]: item.icon,
            }
          ]"
        >
          <template v-if="section.list.class === 'grid'">
            <ComponentFade
              v-for="(text, k) in item"
              :key="`text-${index}-${j}-${k}`"
              component="span"
              is-lower
              :is-unrevealed="!reveal.isRevealed"
              :style="reveal.transitionDelay(j + k + 1)"
            >
              {{ text }}
            </ComponentFade>
          </template>
          <template v-if="section.list.class === 'link'">
            <ComponentFade
              v-if="item.icon"
              :name="item.icon"
              height="20px"
              :component="ComponentIcon"
              is-lower
              :is-unrevealed="!reveal.isRevealed"
              :style="reveal.transitionDelay(j + 1)"
            />
            <ComponentFade
              v-else
              component="span"
              is-lower
              :is-unrevealed="!reveal.isRevealed"
              :style="reveal.transitionDelay(j + 1)"
            >
              {{ item.name }}
            </ComponentFade>
            <ComponentFade
              rel="noopener noreferrer"
              target="_blank"
              :href="item.link"
              :title="item.title"
              component="a"
              is-lower
              :is-unrevealed="!reveal.isRevealed"
              :style="reveal.transitionDelay(j + 2)"
            >
              {{ item.title }}
            </ComponentFade>
          </template>
        </div>
      </div>
      <slot />
    </template>
  </ComponentReveal>
</template>

<script>
import { Fade as ComponentFade } from '@/components/Fade'
import { Icon as ComponentIcon } from '@/components/Icon'
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Reveal as ComponentReveal } from '@/components/Reveal'
import { Title as ComponentTitle } from '@/components/Title'

export default {
  name: 'Field',
  components: {
    ComponentFade,
    ComponentReveal,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    section: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ComponentIcon,
      ComponentParagraph,
      ComponentTitle,
    }
  },
}
</script>

<style lang="scss" module>
.title {
  margin-bottom: 6rem;

  @include bp(md) {
    margin-bottom: 5rem;
  }

  @include bp(sm) {
    margin-bottom: 4rem;
  }
}

.subtitle {
  margin-bottom: 5rem;

  @include bp(sm) {
    margin-bottom: 4rem;
  }
}

.list {
  display: grid;
  grid-gap: 6rem;
  font-size: 1.8rem;

  @include bp(sm) {
    grid-gap: 4rem;
    font-size: 1.6rem;
  }
}

.grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;

  > *:nth-child(1),
  > *:nth-child(2) {
    font-weight: 600;
  }

  > *:nth-child(2n) {
    text-align: right;
  }
}

.link {
  display: grid;
  grid-gap: 2rem;

  &.isInline {
    grid-auto-flow: column;
    justify-content: flex-start;
  }

  > *:nth-child(2) {
    font-weight: 600;
  }
}
</style>
