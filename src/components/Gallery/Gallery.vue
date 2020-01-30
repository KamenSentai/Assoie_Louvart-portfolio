<template>
  <div :class="$style.container">
    <div
      v-for="(row, i) in media"
      :key="`row-${i}`"
      :class="$style.line"
      :style="{ gridAutoColumns: `minmax(auto, ${size}px)` }"
    >
      <template v-for="(medium, j) in row">
        <video
          v-if="isVideo(medium)"
          :key="`video-${j}`"
          :src="medium"
          :class="$style.medium"
          autoplay
          loop
          muted
        />
        <img
          v-else
          :key="`image-${j}`"
          :src="medium"
          :class="$style.medium"
        >
      </template>
    </div>
  </div>
</template>

<script>
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
    isVideo() {
      return medium => medium.split('.').splice(-1)[0] === 'mp4'
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
  width: 100%;
}
</style>
