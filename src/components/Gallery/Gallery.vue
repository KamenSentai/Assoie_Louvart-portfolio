<template>
  <div :class="$style.container">
    <ComponentReveal
      v-for="(row, i) in media"
      :key="`row-${i}`"
      :class="$style.line"
      :style="{ gridAutoColumns: `minmax(auto, ${size}px)` }"
    >
      <template v-slot:default="reveal">
        <template v-for="(medium, j) in row">
          <ComponentFade
            v-if="isImage(medium)"
            :key="`image-${j}`"
            component="img"
            :is-unrevealed="!reveal.isRevealed"
            :src="medium"
            :class="$style.medium"
            :style="{ transitionDelay: `${reveal.revealDelay * j}s` }"
          />
          <ComponentFade
            v-else-if="isVideo(medium)"
            :key="`video-${j}`"
            component="video"
            :is-unrevealed="!reveal.isRevealed"
            :src="medium"
            :class="$style.medium"
            :style="{ transitionDelay: `${reveal.revealDelay * j}s` }"
            autoplay
            loop
            muted
          />
        </template>
      </template>
    </ComponentReveal>
  </div>
</template>

<script>
import { Fade as ComponentFade } from '@/components/Fade'
import { Reveal as ComponentReveal } from '@/components/Reveal'
import { imageTypes, videoTypes } from '@/utils/types'

export default {
  name: 'Gallery',
  components: {
    ComponentFade,
    ComponentReveal,
  },
  props: {
    size: {
      type: Number,
      required: true,
    },
    media: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    isImage() {
      return medium => Object.keys(imageTypes).includes(`.${medium.split('.').splice(-1)[0]}`)
    },
    isVideo() {
      return medium => Object.keys(videoTypes).includes(`.${medium.split('.').splice(-1)[0]}`)
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: 20rem;

  @include bp(lg) {
    grid-gap: 12rem;
  }

  @include bp(md) {
    grid-gap: 6rem;
  }

  @include bp(sm) {
    grid-gap: 4rem;
  }
}

.line {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8rem;
  justify-content: center;
  padding: 0 6rem;

  @include bp(md) {
    grid-gap: 6rem;
  }

  @include bp(sm) {
    grid-auto-flow: row;
    grid-gap: 4rem;
  }
}

.medium {
  justify-self: center;
  max-width: 100%;
  max-height: calc(100vh - 2rem);
}
</style>
