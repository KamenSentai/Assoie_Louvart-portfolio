<template>
  <div :class="$style.container">
    <ComponentTag
      v-if="title"
      :text="title"
    />
    <ComponentParagraph
      v-for="(item, index) in items"
      :key="`item-${index}`"
      :text="item"
    />
  </div>
</template>

<script>
import { Tag as ComponentTag } from '@/components/Tag'
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'

export default {
  name: 'List',
  components: {
    ComponentTag,
    ComponentParagraph,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: 1rem;
  align-content: flex-start;
}
</style>
