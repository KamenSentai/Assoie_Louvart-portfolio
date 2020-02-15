<template>
  <aside :class="$style.container">
    <div :class="$style.wrapper">
      <span
        v-for="i in marks"
        :key="`page-${i}`"
        :class="[
          $style.mark,
          {
            [$style.isActive]: page(i - 1).isCurrent,
            [$style.isAround]: page(i - 1).isAround,
          }
        ]"
        :style="!$isMobile && navigationStyle(i - 1)"
        @click="$emit('click', { deltaY: page(i - 1).scroll })"
      >
        <span :class="$style.page">
          {{ page(i - 1).digits }}
        </span>
      </span>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    duration: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    navigated: {
      type: Number,
      required: true,
    },
    savedIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    digits() {
      return this.length.toString().length + 1
    },
    navigationStyle() {
      return (index) => {
        const { duration } = this
        const { isVisible, top } = this.page(index)

        return {
          top: `${top}%`,
          transition: `
            top ${duration}ms,
            opacity ${duration / 2}ms ${isVisible ? duration / 2 : 0}ms
          `,
          pointerEvents: isVisible ? 'auto' : 'none',
        }
      }
    },
    page() {
      return (index) => {
        const {
          length,
          marks,
          navigated,
          savedIndex,
        } = this

        let isAround = false
        let isCurrent = false
        let page = 0
        let scroll = 0
        let top

        switch (this.$mod(index - navigated, marks)) {
          case 0:
            isCurrent = true
            page = savedIndex
            top = 50
            break
          case 1:
            isAround = true
            page = this.$mod(savedIndex + 1, length)
            scroll = 1
            top = 100
            break
          case 2:
            top = 150
            break
          case marks - 2:
            top = -50
            break
          case marks - 1:
            isAround = true
            page = this.$mod(savedIndex - 1, length)
            scroll = -1
            top = 0
            break
          default:
            top = 50
        }

        const isVisible = isCurrent || isAround
        const digits = '0'.repeat(this.digits - (page + 1).toString().length) + (page + 1)

        return {
          digits,
          isAround,
          isCurrent,
          isVisible,
          scroll,
          top,
        }
      }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-row: span 2;
  padding: 8rem 1rem;
  overflow: hidden;
  background-color: $white;
}

.wrapper {
  position: relative;
  font-weight: 400;
}

.mark {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2em;
  font-size: 1.8rem;
  text-align: center;
  word-break: break-all;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0;
  transition-timing-function: ease-in-out;
  user-select: none;

  &.isActive,
  &.isAround {
    opacity: 1;
  }

  &.isActive .page,
  &.isAround:hover .page {
    opacity: 1;
  }
}

.page {
  opacity: .25;
  transition: opacity $smooth;
}
</style>
