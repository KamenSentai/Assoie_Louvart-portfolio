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
    transform: translateY(25%);
  }

  .indicator {
    transform: translateY(-50%);
  }

  .image:not(:last-of-type) {
    transform: translate(0);
  }
}

.header,
.title,
.subtitle,
.image {
  transition: transform $smooth-slow, opacity $smooth-slow;
}

.cover {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6rem;

  @include bp(sm) {
    padding: 0 3rem;
  }
}

.wrapper {
  position: relative;
  margin-top: 2rem;
}

.image {
  width: 320px;
  transform-origin: center;
  transition-delay: 0s;
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
    transform: rotate(-5deg) scale(.8375) translate(32.5%, -22.5%);
    transition-delay: .75s;
  }

  &:nth-of-type(2) {
    transform: rotate(5deg) scale(.8375) translate(-27.5%, 12.5%);
    transition-delay: .375s;
  }
}

.bloc {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
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
