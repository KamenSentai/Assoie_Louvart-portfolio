<template>
  <ComponentHero :class="$style.container">
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
    <div :class="$style.wrapper">
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
          <img
            :class="$style.cover"
            :src="landing.cover"
            :alt="landing.name"
          >
          <div :class="$style.frame">
            <span
              v-if="$isMobile"
              :class="$style.tag"
            >
              {{ landing.year }}
            </span>
            <h2 :class="$style.title">
              {{ landing.name }}
            </h2>
            <p
              v-if="$isMobile"
              :class="$style.text"
            >
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
      :class="$style.indicator"
    />
  </ComponentHero>
</template>

<script>
import { mapGetters } from 'vuex'
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
      currentIndex: 0,
      duration: 1000,
      delay: 500,
      navigated: 0,
      isWheeling: false,
    }
  },
  computed: {
    ...mapGetters('site', ['landings']),
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
          currentIndex,
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
            page = currentIndex
            top = 50
            break
          case 1:
            isAround = true
            page = this.$mod(currentIndex + 1, length)
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
            page = this.$mod(currentIndex - 1, length)
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
          currentIndex,
          duration,
          isCarousel,
          landings: { length },
        } = this
        const isCurrent = index === currentIndex
        let translate

        if (isCarousel) {
          switch (this.$mod(index - currentIndex, length)) {
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
          translate = index - currentIndex
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
  mounted() {
    window.addEventListener('wheel', this.wheel)
    window.addEventListener('keydown', this.press)
  },
  destroyed() {
    window.removeEventListener('wheel', this.wheel)
    window.removeEventListener('keydown', this.press)
  },
  methods: {
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
    wheel({ deltaY }) {
      if (!this.isWheeling) {
        if (deltaY !== 0) {
          const {
            currentIndex,
            isCarousel,
            navigated,
            marks,
            landings: { length },
          } = this

          if (deltaY > 0) {
            this.currentIndex = isCarousel
              ? this.$mod(currentIndex + 1, length)
              : Math.min(length - 1, currentIndex + 1)
            this.navigated = isCarousel
              ? this.$mod(navigated + 1, marks)
              : Math.min(marks - 1, navigated + 1)
          } else if (deltaY < 0) {
            this.currentIndex = isCarousel
              ? this.$mod(currentIndex - 1, length)
              : Math.max(0, currentIndex - 1)
            this.navigated = isCarousel
              ? this.$mod(navigated - 1, marks)
              : Math.max(0, navigated - 1)
          }

          this.isWheeling = true

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
  grid-template-columns: 12rem 1fr 12rem;

  @include bp(lg) {
    grid-gap: 0 8rem;
  }

  @include bp(md) {
    grid-gap: 0 6rem;
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
}

.cover {
  max-width: 100%;
  max-height: 100%;
}

.frame {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $light;
  text-align: center;
  text-shadow: 0 5px 10px rgba($dark, .25);

  @include bp(sm) {
    right: 0;
    left: 0;
    display: grid;
    grid-gap: .5rem;
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
  font-size: 1.5rem;
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
  will-change: opacity;

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
  transition: opacity .5s ease-in-out;
  will-change: opacity;
}

.indicator {
  grid-area: 2 / 2;
}
</style>
