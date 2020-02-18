<template>
  <main
    :class="[
      $style.container,
      {
        [$style.isHidden]: !isCompleted,
      }
    ]"
  >
    <div
      v-for="(landing, index) in landings"
      :key="landing.slug"
      :class="[
        $style.wrapper,
        {
          [$style.isActive]: $isMobile || isCurrent(index),
        }
      ]"
      :style="!$isMobile && translationStyle(index)"
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
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import MixinWrapper from '@/modules/Home/mixins/wrapper'

export default {
  name: 'Hero',
  mixins: [MixinWrapper],
  props: {
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  methods: mapActions('pin', ['hide', 'show']),
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  display: grid;
  grid-gap: 2rem;
  transition: transform $smooth-slower, opacity $smooth-slower;

  &.isHidden {
    opacity: 0;

    @include bp(sm up) {
      transform: translateY(12.5%);
    }

    .wrapper.isActive .title {
      transform: translateY(25%);
      opacity: 0;
    }
  }
}

.wrapper {
  transition-timing-function: $easing;
  will-change: transform, opacity;
  @include overlay;
  @include centralizer;

  @include bp(sm) {
    position: static;
  }

  &.isActive .title {
    transform: translateY(0);
    opacity: 1;
  }
}

.link {
  position: relative;
  display: contents;
  width: 100%;
  height: 100%;
  font-size: 0;

  @include bp(sm) {
    @include centralizer;
  }

  &:hover {

    .frame::after {
      opacity: 1;
    }

    .cover {
      transform: scale(1.0625);
    }

    .text {
      transform: translateY(0);
      opacity: 1;
    }
  }
}

.frame {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  @include centralizer;

  &::after {
    background-color: rgba($dark, .6);
    opacity: 0;
    transition: opacity $smooth;
    content: "";
    will-change: opacity;
    @include overlay;
  }
}

.cover {
  max-width: 100%;
  max-height: 100%;
  transition: transform $smooth;
}

.modal {
  position: absolute;
  color: $light;
  text-align: center;
  text-shadow: $text-shadow;
  pointer-events: none;

  @include centralizer(grid) {
    grid-gap: .5rem;
  }

  @include bp(sm) {
    right: 0;
    left: 0;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr auto 1fr;
    padding: 1rem;

    &::after {
      grid-area: span 2 / 3;
      content: "";
    }
  }
}

.tag {
  font-weight: 700;
  font-size: 1.8rem;
  font-family: $font-title;
  letter-spacing: .5rem;
  transform: rotate(-90deg);
  transform-origin: center;

  @include bp(sm) {
    grid-area: span 2 / 1;
    justify-self: flex-start;
    transform: rotate(-90deg) translateX(-50%) translateY(50%);
    transform-origin: 0 center;
  }
}

.title {
  font-weight: 700;
  font-size: 8rem;
  font-family: $font-title;
  transform: translateY(25%);
  opacity: 0;
  transition: transform $smooth, opacity $smooth;
  transition-delay: .5s;

  @include bp(lg) {
    font-size: 6rem;
  }

  @include bp(md) {
    font-size: 4rem;
  }

  @include bp(sm) {
    grid-area: 1 / 2;
    align-self: flex-end;
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
    grid-area: 2 / 2;
    align-self: flex-start;
    font-size: 1.5rem;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
