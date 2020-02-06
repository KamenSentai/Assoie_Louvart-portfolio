<template>
  <section>
    <ComponentTitle
      :large="!index"
      :small="!!index"
      :tag="section.title.tag"
      :text="section.title.text"
      :class="$style.title"
    />
    <ComponentParagraph
      v-if="section.paragraph"
      :text="section.paragraph"
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
          <span
            v-for="(text, k) in item"
            :key="`text-${index}-${j}-${k}`"
          >
            {{ text }}
          </span>
        </template>
        <template v-if="section.list.class === 'link'">
          <ComponentIcon
            v-if="item.icon"
            :name="item.icon"
            height="20px"
          />
          <span v-else>{{ item.name }}</span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            :href="item.link"
            :title="item.title"
          >
            {{ item.title }}
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon as ComponentIcon } from '@/components/Icon'
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Title as ComponentTitle } from '@/components/Title'

export default {
  name: 'About',
  components: {
    ComponentIcon,
    ComponentParagraph,
    ComponentTitle,
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
