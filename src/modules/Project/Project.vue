<template>
  <main>
    <ProjectIntro
      :intro="project.intro"
      :type="project.type"
      :year="project.year"
    />
    <template v-for="(section, index) in project.sections">
      <ComponentScreen
        v-if="section.screen"
        :key="`screen-${index}`"
        :scroll-y="scrollY"
        :src="section.screen"
        :window-height="windowHeight"
      />
      <section
        :key="`section-${index}`"
        :class="[
          $style.section,
          {
            [$style.isContaining]: section.media && section.media.length,
          }
        ]"
      >
        <ComponentBanner
          v-if="section.contents && (section.contents.title || section.contents.text)"
          :title="section.contents.title"
          :text="section.contents.text"
        />
        <ComponentGallery
          v-if="section.media && section.media.length"
          :size="project.size"
          :media="section.media"
        />
      </section>
    </template>
  </main>
</template>

<script>
import { Intro as ProjectIntro } from './components'
import { Banner as ComponentBanner } from '@/components/Banner'
import { Gallery as ComponentGallery } from '@/components/Gallery'
import { Screen as ComponentScreen } from '@/components/Screen'

export default {
  name: 'Project',
  components: {
    ProjectIntro,
    ComponentBanner,
    ComponentGallery,
    ComponentScreen,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      scrollY: 0,
      windowHeight: 0,
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    window.addEventListener('scroll', this.scroll)
    this.resize()
  },
  destroyed() {
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    resize() {
      this.windowHeight = window.innerHeight
    },
    scroll() {
      this.scrollY = window.scrollY
    },
  },
}
</script>

<style lang="scss" module>
.section {
  padding: 10rem 0;

  @include theme(light);

  @include bp(md) {
    padding: 4rem 0;
  }

  @include bp(sm) {
    padding: 3rem 0;
  }

  &:not(:last-of-type):nth-of-type(2n) {
    @include theme(dark);
  }
}

.isContaining {
  padding: 20rem 0;

  @include bp(md) {
    padding: 8rem 0;
  }

  @include bp(sm) {
    padding: 6rem 0;
  }
}
</style>
