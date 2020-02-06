<template>
  <div :class="$style.container">
    <div
      v-for="(row, i) in media"
      :key="`row-${i}`"
      :class="$style.line"
      :style="{ gridAutoColumns: `minmax(auto, ${size}px)` }"
    >
      <template v-for="(medium, j) in row">
        <img
          v-if="isImage(medium)"
          :key="`image-${j}`"
          :src="medium"
          :class="$style.medium"
        >
        <video
          v-else-if="isVideo(medium)"
          :key="`video-${j}`"
          :src="medium"
          :class="$style.medium"
          autoplay
          loop
          muted
        />
      </template>
    </div>
  </div>
</template>

<script>
import { imageTypes, videoTypes } from '@/utils/types'

export default {
  name: 'Gallery',
  props: {
    size: {
      type: Number,
      required: true,
    },
    media: {
      type: Array,
      required: true,
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
  max-height: calc(100vh - 4rem);
}
</style>
