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
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Tag as ComponentTag } from '@/components/Tag'

export default {
  name: 'List',
  components: {
    ComponentParagraph,
    ComponentTag,
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
