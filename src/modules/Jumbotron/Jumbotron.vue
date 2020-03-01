<template>
  <div
    class="font-null"
    :class="[
      $style.container,
      {
        [$style.isFull]: $isProject,
        [$style.isInactive]: !isCompleted || !isMounted || !areLoaded,
      }
    ]"
  >
    <ModuleHeader :class="$style.header" />
    <ComponentHero v-if="$isProject">
      <template v-if="project">
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
          @click="scroll"
        />
      </template>
      <ModuleError v-else />
    </ComponentHero>
    <ModulePin />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModuleError from '@/modules/Error'
import ModuleHeader from '@/modules/Header'
import ModulePin from '@/modules/Pin'
import { Hero as ComponentHero } from '@/components/Hero'
import { Indicator as ComponentIndicator } from '@/components/Indicator'
import { easings, scrollTo } from '@/utils/scroll'

export default {
  name: 'Jumbotron',
  components: {
    ModuleError,
    ModuleHeader,
    ModulePin,
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
      return !this.$isProject
      || !this.project
      || this.loaded.length === (this.project && this.project.hero.length)
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
    scroll() {
      if (this.$isProject) {
        scrollTo(window.innerHeight, 1000, easings.easeInOutQuad)
      }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  z-index: 10;
  min-height: 0;
}

.isFull {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  transition: min-height $smooth-slower;
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

  .image:not(:nth-child(3)) {
    transform: translate(0);
  }
}

.header,
.title,
.subtitle,
.image {
  transition: transform $smooth-slow, opacity $smooth-slow;
}

.header {
  position: relative;
  z-index: 1;
}

.cover {
  padding: 0 6rem;

  @include centralizer;

  @include bp(sm) {
    padding: 0 3rem;
  }
}

.wrapper {
  position: relative;
  margin-top: 2rem;
}

.image {
  width: 400px;
  transform-origin: center;
  transition-delay: 0s;
  user-select: none;

  @include bp(lg) {
    width: 320px;
  }

  @include bp(md) {
    width: 240px;
  }

  @include bp(sm) {
    width: 160px;
  }

  &:nth-of-type(1),
  &:nth-of-type(2) {
    position: absolute;
  }

  &:nth-of-type(1) {
    transform: rotate(-2.5deg) scale(.8375) translate(34%, -17%);
    transition-delay: .75s;
  }

  &:nth-of-type(2) {
    transform: rotate(3.5deg) scale(.8375) translate(-32%, 7%);
    transition-delay: .375s;
  }

  &:nth-of-type(3) {
    position: relative;
  }
}

.bloc {
  padding: 2rem;
  text-align: center;
  text-shadow: $text-shadow;

  @include overlay;

  @include centralizer() {
    flex-direction: column;
  }
}

.title {
  font-weight: 700;
  font-size: 8.5rem;
  font-family: $font-title;
  transition-delay: 1s;

  @include bp(lg) {
    font-size: 7rem;
  }

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

  @include bp(lg) {
    font-size: 2.2rem;
  }

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
