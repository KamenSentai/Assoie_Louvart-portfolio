<template>
  <div
    class="font-null"
    :class="[
      $style.container,
      {
        [$style.isFull]: $isProject,
      }
    ]"
  >
    <slot />
    <ComponentHero v-if="$isProject">
      <div :class="$style.cover">
        <div :class="$style.wrapper">
          <img
            v-for="image in project.hero"
            :key="`hero-${image}`"
            :src="image"
            :alt="project.name"
            :class="$style.image"
          >
          <div :class="$style.bloc">
            <h1 :class="$style.title">
              {{ project.name }}
            </h1>
            <h2 :class="$style.subtitle">
              {{ project.subject }}
            </h2>
          </div>
        </div>
      </div>
      <ComponentIndicator color="light" />
    </ComponentHero>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Hero as ComponentHero } from '@/components/Hero'
import { Indicator as ComponentIndicator } from '@/components/Indicator'

export default {
  name: 'Jumbotron',
  components: {
    ComponentHero,
    ComponentIndicator,
  },
  computed: {
    ...mapGetters('site', ['heroes']),
    project() {
      return this.heroes.find(hero => hero.slug === this.$route.params.slug)
    },
  },
}
</script>

<style lang="scss" module>
.container {
  width: 100%;
}

.isFull {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  color: $white;
  background-color: $dark;

  @include selection(dark);

  * {
    color: $white;
  }
}

.cover {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6rem;

  @include bp(sm) {
    justify-content: flex-start;
  }
}

.wrapper {
  position: relative;
}

.image {
  width: 380px;
  user-select: none;
  $dx: 60px;
  $dy: 25px;
  $smdx: 20px;
  $smdy: 10px;

  @include bp(md) {
    width: 240px;
  }

  @include bp(sm) {
    width: 160px;
  }

  &:not(:first-of-type) {
    position: absolute;
    top: 0;
    left: 0;
  }

  &:nth-of-type(1) {
    z-index: 2;
    transform: translateY(-$dy);

    @include bp(sm) {
      transform: translateY(-$smdy);
    }
  }

  &:nth-of-type(2) {
    z-index: 1;
    transform: translateX(-$dx);

    @include bp(sm) {
      transform: translateX(-$smdx);
    }
  }

  &:nth-of-type(3) {
    z-index: 0;
    transform: translate(-$dx * 2, $dy);

    @include bp(sm) {
      transform: translate(-$smdx * 2, $smdy);
    }
  }
}

.bloc {
  position: absolute;
  top: 5rem;
  left: calc(100% - 1rem);
  z-index: 3;
}

.title {
  font-weight: 700;
  font-size: 8.5rem;
  font-family: $font-title;

  @include bp(md) {
    font-size: 6rem;
  }

  @include bp(sm) {
    font-size: 4rem;
  }
}

.subtitle {
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 2.5;
  text-align: right;

  @include bp(md) {
    font-size: 2rem;
  }

  @include bp(sm) {
    font-size: 1.6rem;
  }
}
</style>
