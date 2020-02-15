<template>
  <div :class="$style.container">
    <div
      :class="[
        $style.wrapper,
        {
          [$style.isClickable]: isClickable,
        }
      ]"
      @click="isClickable && $emit('click')"
    >
      <ComponentIcon
        :class="$style.indicator"
        :color="color"
        name="Arrow"
        width="20px"
      />
    </div>
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
    isClickable: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 8rem 3rem;
}

.wrapper {
  font-size: 0;
}

.isClickable {
  cursor: pointer;
}

.indicator {
  animation: slide 10s infinite 1.5s;
}

@keyframes slide {

  0% {
    transform: translateY(0);
    opacity: 1;
  }

  5% {
    transform: translateY(100%);
    opacity: 0;
  }

  10% {
    transform: translateY(-100%);
    opacity: 0;
  }

  15% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
