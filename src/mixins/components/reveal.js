export default {
  data() {
    return {
      areRevealed: [],
      isRevealed: false,
      revealDelay: 0.25,
    }
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.observe()
      })
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.observe()
    })
  },
  methods: {
    observe() {
      Object.assign(this.$data, this.$options.data())

      const observer = new IntersectionObserver((entries, self) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > self.thresholds[0]) {
            const target = this.areRevealed.find(element => element.target === entry.target)

            if (target) {
              this.areRevealed[this.areRevealed.indexOf(target)].isRevealed = true
            } else {
              this.isRevealed = true
            }
            self.unobserve(entry.target)
          }
        })
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.375,
      })

      const { reveal } = this.$refs

      if (!reveal.length) {
        observer.observe(reveal.$el || reveal)
      } else {
        reveal.forEach((element) => {
          const target = element.$el || element
          this.areRevealed.push({ target, isRevealed: false })
          observer.observe(target)
        })
      }
    },
  },
}
