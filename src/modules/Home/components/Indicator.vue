<template>
  <ComponentIndicator
    :class="[
      $style.container,
      {
        [$style.isDisappeared]: hasScrolled,
        [$style.isHidden]: !isCompleted,
      }
    ]"
  />
</template>

<script>
import { Indicator as ComponentIndicator } from '@/components/Indicator'

export default {
  name: 'Indicator',
  components: {
    ComponentIndicator,
  },
  props: {
    hasScrolled: {
      type: Boolean,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  grid-area: 2 / 2;
  opacity: 1;
  transition: transform $smooth .75s, opacity $smooth .75s;

  &.isDisappeared {
    transform: translateY(50%);
    opacity: 0;
    transition-delay: 0s;
  }

  &.isHidden {
    transform: translateY(-50%);
    opacity: 0;
    transition-delay: 0s;
  }
}
</style>
