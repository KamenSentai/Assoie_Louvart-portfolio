<template>
  <div :class="$style.container">
    <ComponentIcon
      :color="color"
      name="Arrow"
      width="20px"
    />
  </div>
</template>

<script>
import { Icon as ComponentIcon } from '@/components/Icon'

export default {
  name: 'Indicator',
  components: {
    ComponentIcon,
  },
  props: {
    color: {
      type: String,
      default: 'dark',
    },
  },
}
</script>

<style lang="scss" module>
.container {
  margin: 4rem 8rem;
  text-align: center;
}
</style>
