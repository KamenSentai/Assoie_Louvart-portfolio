<template>
  <aside :class="$style.container">
    <div
      v-for="(landing, index) in landings"
      :key="landing.slug"
      :class="$style.wrapper"
      :style="translation(index)"
    >
      <span :class="$style.tag">
        {{ landing.year }}
      </span>
    </div>
  </aside>
</template>

<script>
import MixinWrapper from '@/modules/Home/mixins/wrapper'

export default {
  name: 'Sidebar',
  mixins: [MixinWrapper],
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  display: grid;
  grid-gap: 2rem;
}

.wrapper {
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
}

.tag {
  font-weight: 700;
  font-size: 1.8rem;
  font-family: $font-title;
  letter-spacing: .5rem;
  transform: rotate(-90deg);
  transform-origin: center;
}
</style>
