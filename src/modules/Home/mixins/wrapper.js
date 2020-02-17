export default {
  props: {
    duration: {
      type: Number,
      required: true,
    },
    isCarousel: {
      type: Boolean,
      required: true,
    },
    landings: {
      type: Array,
      required: true,
    },
    savedIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isCurrent() {
      return index => index === this.savedIndex
    },
    translationStyle() {
      return (index) => {
        const {
          duration,
          isCarousel,
          savedIndex,
          landings: { length },
        } = this
        const isCurrent = this.isCurrent(index)
        let translate

        if (isCarousel) {
          switch (this.$mod(index - savedIndex, length)) {
            case length - 1:
              translate = -1
              break
            case 1:
              translate = 1
              break
            default:
              translate = 0
              break
          }
        } else {
          translate = index - savedIndex
        }

        return {
          transform: `translateY(${(translate) * 100}vh)`,
          opacity: isCurrent ? 1 : 0,
          transition: `
            transform ${duration}ms,
            opacity ${duration / 2}ms ${isCurrent ? duration / 2 : 0}ms
          `,
          pointerEvents: isCurrent ? 'auto' : 'none',
        }
      }
    },
  },
}
