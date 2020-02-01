<template>
  <component
    :is="icon"
    :class="`text-${color}`"
    v-bind="$attrs"
  />
</template>

<script>
import slot from './slot'

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'light',
    },
  },
  computed: {
    icon() {
      return slot[this.name]
    },
  },
}
</script>
