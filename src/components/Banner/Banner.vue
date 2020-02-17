<template>
  <div :class="$style.container">
    <ComponentTitle
      v-if="title"
      tag="h2"
      :text="title"
    />
    <ComponentParagraph
      v-if="text"
      :text="text"
      :class="$style.paragraph"
    />
  </div>
</template>

<script>
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Title as ComponentTitle } from '@/components/Title'

export default {
  name: 'Banner',
  components: {
    ComponentParagraph,
    ComponentTitle,
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
}
</style>
