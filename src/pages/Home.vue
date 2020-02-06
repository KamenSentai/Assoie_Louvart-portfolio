<template>
  <ComponentHero
    :class="$style.container"
    @touchstart="touchStart"
    @touchmove="toucheMove"
  >
    <aside
      v-if="!$isMobile"
      :class="$style.wrapper"
    >
      <div
        v-for="(landing, index) in landings"
        :key="landing.slug"
        :class="$style.bloc"
        :style="translation(index)"
      >
        <span :class="$style.tag">
          {{ landing.year }}
        </span>
      </div>
    </aside>
    <div
      :class="[
        $style.wrapper,
        {
          [$style.isHidden]: !isCompleted,
        }
      ]"
    >
      <div
        v-for="(landing, index) in landings"
        :key="landing.slug"
        :class="$style.bloc"
        :style="!$isMobile && translation(index)"
      >
        <router-link
          :title="landing.name"
          :to="{ name: 'project', params: { slug: landing.slug } }"
          :class="$style.link"
        >
          <div
            :class="$style.frame"
            @mouseover="show"
            @mouseout="hide"
          >
            <img
              :class="$style.cover"
              :src="landing.cover"
              :alt="landing.name"
            >
          </div>
          <div :class="$style.modal">
            <span
              v-if="$isMobile"
              :class="$style.tag"
            >
              {{ landing.year }}
            </span>
            <h2 :class="$style.title">
              {{ landing.name }}
            </h2>
            <p :class="$style.text">
              {{ landing.subject }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <aside
      v-if="!$isMobile"
      :class="$style.navigation"
    >
      <div :class="$style.limiter">
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
          :style="!$isMobile && navigation(i - 1)"
          @click="wheel({ deltaY: page(i - 1).scroll })"
        >
          <span :class="$style.page">
            {{ page(i - 1).digits }}
          </span>
        </span>
      </div>
    </aside>
    <ComponentIndicator
      v-if="!$isMobile"
      :class="[
        $style.indicator,
        {
          [$style.isDisappeared]: hasScrolled,
          [$style.isHidden]: !isCompleted,
        }
      ]"
    />
  </ComponentHero>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Hero as ComponentHero } from '@/components/Hero'
import { Indicator as ComponentIndicator } from '@/components/Indicator'

export default {
  name: 'Home',
  components: {
    ComponentHero,
    ComponentIndicator,
  },
  data() {
    return {
      duration: 1000,
      delay: 500,
      navigated: 0,
      isWheeling: false,
      hasScrolled: false,
      touchPosition: 0,
    }
  },
  computed: {
    ...mapGetters('loading', ['isCompleted', 'isLoaded']),
    ...mapGetters('site', ['landings', 'savedIndex']),
    digits() {
      return this.landings.length.toString().length + 1
    },
    isCarousel() {
      return this.landings.length > 2
    },
    marks() {
      return this.landings.length + 2
    },
    navigation() {
      return (index) => {
        const { duration } = this
        const {
          isVisible,
          top,
        } = this.page(index)

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
          savedIndex,
          navigated,
          marks,
          landings: { length },
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
    translation() {
      return (index) => {
        const {
          savedIndex,
          duration,
          isCarousel,
          landings: { length },
        } = this
        const isCurrent = index === savedIndex
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
  beforeRouteLeave(to, __, next) {
    this.hide()

    if (to.name === 'project') {
      this.cover(next)
    } else {
      next()
    }
  },
  mounted() {
    document.documentElement.style.overflow = this.isLoaded && this.$isMobile ? 'auto' : 'hidden'
    window.addEventListener('wheel', this.wheel)
    window.addEventListener('keydown', this.press)
  },
  destroyed() {
    document.documentElement.style.overflow = 'auto'
    window.removeEventListener('wheel', this.wheel)
    window.removeEventListener('keydown', this.press)
  },
  methods: {
    ...mapActions('pin', ['cover', 'hide', 'show']),
    ...mapActions('site', ['updateIndex']),
    press({ keyCode }) {
      switch (keyCode) {
        case 38:
          this.wheel({ deltaY: -1 })
          break
        case 40:
          this.wheel({ deltaY: 1 })
          break
        // no default
      }
    },
    toucheMove({ touches }) {
      const [{ clientY: y }] = touches
      const movementY = y - this.touchPosition
      this.touchPosition = y
      this.wheel({ deltaY: -movementY })
    },
    touchStart({ touches }) {
      const [{ clientY: y }] = touches
      this.touchPosition = y
    },
    wheel({ deltaY }) {
      if (!this.isWheeling && this.isCompleted) {
        if (deltaY !== 0) {
          const {
            savedIndex,
            isCarousel,
            navigated,
            marks,
            landings: { length },
          } = this

          if (deltaY > 0) {
            this.updateIndex(isCarousel
              ? this.$mod(savedIndex + 1, length)
              : Math.min(length - 1, savedIndex + 1))
            this.navigated = isCarousel
              ? this.$mod(navigated + 1, marks)
              : Math.min(marks - 1, navigated + 1)
          } else {
            this.updateIndex(isCarousel
              ? this.$mod(savedIndex - 1, length)
              : Math.max(0, savedIndex - 1))
            this.navigated = isCarousel
              ? this.$mod(navigated - 1, marks)
              : Math.max(0, navigated - 1)
          }

          this.isWheeling = true
          this.hasScrolled = true

          setTimeout(() => {
            this.isWheeling = false
          }, this.duration + this.delay)
        }
      }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  grid-gap: 0 10rem;
  grid-template-columns: 10rem 1fr 10rem;

  @include bp(lg) {
    grid-gap: 0 6rem;
  }

  @include bp(md) {
    grid-gap: 0 4rem;
  }

  @include bp(sm) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
}

.wrapper {
  position: relative;
  display: grid;
  grid-gap: 2rem;
  transition: transform $smooth-slow, opacity $smooth-slow;

  &.isHidden {
    transform: translateY(12.5%);
    opacity: 0;
  }
}

.bloc {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-timing-function: ease-in-out;
  will-change: transform, opacity;

  @include bp(sm) {
    position: static;
  }
}

.tag {
  font-weight: 700;
  font-size: 1.8rem;
  font-family: $font-title;
  letter-spacing: .5rem;
  transform: rotate(-90deg);
  transform-origin: center;
}

.link {
  position: relative;
  display: contents;
  width: 100%;
  height: 100%;
  font-size: 0;

  @include bp(sm) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {

    .frame::after {
      opacity: 1;
    }

    .cover {
      transform: scale(1.125);
    }

    .text {
      transform: translateY(0);
      opacity: 1;
    }
  }
}

.frame {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba($dark, .6);
    opacity: 0;
    transition: opacity $smooth;
    content: "";
    will-change: opacity;
  }
}

.cover {
  max-width: 100%;
  max-height: 100%;
  transition: transform $smooth;
}

.modal {
  position: absolute;
  display: grid;
  grid-gap: .5rem;
  align-items: center;
  justify-content: center;
  color: $light;
  text-align: center;
  text-shadow: 0 5px 25px rgba($dark, .25);
  pointer-events: none;

  @include bp(sm) {
    right: 0;
    left: 0;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr auto 1fr;
    padding: 1rem;

    .tag {
      grid-area: span 2 / 1;
      justify-self: flex-start;
      transform: rotate(-90deg) translateX(-50%) translateY(50%);
      transform-origin: 0 center;
    }

    .title {
      grid-area: 1 / 2;
      align-self: flex-end;
    }

    .text {
      grid-area: 2 / 2;
      align-self: flex-start;
    }

    &::after {
      grid-area: span 2 / 3;
      content: "";
    }
  }
}

.title {
  font-weight: 700;
  font-size: 8rem;
  font-family: $font-title;

  @include bp(lg) {
    font-size: 6rem;
  }

  @include bp(md) {
    font-size: 4rem;
  }

  @include bp(sm) {
    font-size: 3.5rem;
  }
}

.text {
  font-size: 2.5rem;
  transform: translateY(25%);
  opacity: 0;
  transition: transform $smooth, opacity $smooth;

  @include bp(lg) {
    font-size: 2.2rem;
  }

  @include bp(md) {
    font-size: 1.8rem;
  }

  @include bp(sm) {
    font-size: 1.5rem;
    transform: translateY(0);
    opacity: 1;
  }
}

.navigation {
  display: grid;
  grid-row: span 2;
  padding: 8rem 1rem;
  overflow: hidden;
  background-color: $white;
}

.limiter {
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

.indicator {
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
