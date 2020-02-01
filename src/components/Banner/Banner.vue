<template>
  <div
    v-if="content.title || content.text"
    :class="$style.container"
  >
    <ComponentTitle
      tag="h2"
      :text="content.title"
    />
    <ComponentParagraph :text="content.text" />
  </div>
</template>

<script>
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Title as ComponentTitle } from '@/components/Title'

export default {
  name: 'Tag',
  components: {
    ComponentParagraph,
    ComponentTitle,
  },
  props: {
    content: {
      type: Object,
      default: () => ({}),
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
</style>
