<template>
  <div
    class="font-null"
    :class="[
      $style.container,
      {
        ['theme-dark']: $isAbout || $isProject,
        [$style.isFull]: $isProject,
        [$style.isInactive]: !isCompleted || !isMounted || !areLoaded,
      }
    ]"
  >
    <ModuleHeader :class="$style.header" />
    <ComponentHero v-if="$isProject">
      <div :class="$style.cover">
        <div :class="$style.wrapper">
          <img
            v-for="(image, index) in [...project.hero].reverse()"
            :key="`hero-${image}`"
            :src="image"
            :alt="project.name"
            :class="$style.image"
            @load="load(index)"
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
      <ComponentIndicator
        :class="$style.indicator"
        color="light"
      />
    </ComponentHero>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModuleHeader from '@/modules/Header'
import { Hero as ComponentHero } from '@/components/Hero'
import { Indicator as ComponentIndicator } from '@/components/Indicator'

export default {
  name: 'Jumbotron',
  components: {
    ModuleHeader,
    ComponentHero,
    ComponentIndicator,
  },
  data() {
    return {
      loaded: [],
    }
  },
  computed: {
    ...mapGetters('loading', ['isCompleted', 'isMounted']),
    ...mapGetters('site', ['projects']),
    areLoaded() {
      return !this.$isProject || this.loaded.length === this.project.hero.length
    },
    project() {
      return this.projects.find(project => project.slug === this.$route.params.slug)
    },
  },
  watch: {
    project() {
      this.loaded = []
    },
  },
  methods: {
    load(index) {
      if (!this.loaded.includes(index)) {
        this.loaded.push(index)
      }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  z-index: 1;
}

.isFull {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}

.isInactive {

  .header,
  .title,
  .subtitle,
  .indicator,
  .image {
    opacity: 0;
    transition-delay: 0s;
    transition-duration: 0s;
  }

  .header {
    transform: translateY(-25%);
    opacity: 0;
    transition-duration: 0s;
  }

  .title,
  .subtitle {
    transform: translateX(-3rem);
  }

  .indicator {
    transform: translateY(-50%);
  }

  .image:not(:nth-of-type(3)) {
    transform: translate(60px, -25px);

    @include bp(sm) {
      transform: translate(20px, -10px);
    }
  }
}

.header,
.title,
.subtitle,
.image {
  transition: transform $smooth, opacity $smooth;
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
  transform: translateY(-2.5rem);
}

.image {
  width: 320px;
  user-select: none;

  @include bp(md) {
    width: 240px;
  }

  @include bp(sm) {
    width: 160px;
  }

  &:nth-of-type(1),
  &:nth-of-type(2) {
    position: absolute;
    z-index: -1;
  }

  &:nth-of-type(1) {
    top: 50px;
    right: 120px;
    transition-delay: .5s;

    @include bp(sm) {
      top: 20px;
      right: 40px;
    }
  }

  &:nth-of-type(2) {
    top: 25px;
    right: 60px;
    transition-delay: .25s;

    @include bp(sm) {
      top: 10px;
      right: 20px;
    }
  }

  &:nth-of-type(3) {
    transition-delay: 0s;
  }
}

.bloc {
  position: absolute;
  top: 7.5rem;
  left: calc(100% - 3rem);
  z-index: 3;
  text-shadow: 0 5px 25px rgba($dark, .25);
}

.title {
  font-weight: 700;
  font-size: 8.5rem;
  font-family: $font-title;
  transition-delay: 1s;

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
  transition-delay: 1.25s;

  @include bp(md) {
    font-size: 2rem;
  }

  @include bp(sm) {
    font-size: 1.6rem;
  }
}

.indicator {
  transition: transform $smooth, opacity $smooth;
  transition-delay: 1.5s;
}
</style>
