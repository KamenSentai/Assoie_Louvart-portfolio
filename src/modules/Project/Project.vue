<template>
  <main>
    <ComponentReveal
      ref="intro"
      component="section"
      :is-revealed="isRevealed"
      :class="$style.intro"
    >
      <!-- Raw text -->
      <ComponentTag text="Intro" />
      <ComponentTitle
        small
        tag="h2"
        :class="$style.title"
        :text="project.intro.title"
      />
      <div :class="$style.wrapper">
        <ComponentReveal
          v-for="(list, index) in lists"
          :key="`list-${index}`"
          :component="ComponentList"
          :is-revealed="isRevealed"
          :title="list.title"
          :items="list.items"
          :style="{ transitionDelay: `${delay * index}s` }"
        />
        <ComponentReveal
          ref="paragraph"
          :component="ComponentParagraph"
          :is-revealed="isRevealed"
          :text="project.intro.text"
          :style="{ transitionDelay: `${delay * lists.length}s` }"
        />
      </div>
    </ComponentReveal>
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
import { Banner as ComponentBanner } from '@/components/Banner'
import { Gallery as ComponentGallery } from '@/components/Gallery'
import { List as ComponentList } from '@/components/List'
import { Tag as ComponentTag } from '@/components/Tag'
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Reveal as ComponentReveal } from '@/components/Reveal'
import { Screen as ComponentScreen } from '@/components/Screen'
import { Title as ComponentTitle } from '@/components/Title'

export default {
  name: 'Project',
  components: {
    ComponentBanner,
    ComponentGallery,
    ComponentTag,
    ComponentReveal,
    ComponentScreen,
    ComponentTitle,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ComponentList,
      ComponentTag,
      ComponentParagraph,
      delay: 0.25,
      isRevealed: false,
      scrollY: 0,
      windowHeight: 0,
    }
  },
  computed: {
    lists() {
      return [
        {
          title: 'Role', // Raw text
          items: this.project.intro.roles,
        },
        {
          title: 'What', // Raw text
          items: [this.project.type, this.project.year.toString()],
        },
      ]
    },
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    window.addEventListener('scroll', this.scroll)
    this.resize()

    new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > observer.thresholds[0]) {
          this.isRevealed = true
          observer.unobserve(entry.target)
        }
      })
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }).observe(this.$refs.intro.$el)
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
.intro {
  padding: 20rem 22rem;

  @include bp(lg) {
    padding: 20rem 12rem;
  }

  @include bp(md) {
    padding: 8rem 4rem;
  }

  @include bp(sm) {
    padding: 8rem 3.5rem 6rem;
  }
}

.title {
  margin-bottom: 12rem;

  @include bp(sm) {
    margin-bottom: 4rem;
  }

  &::after {
    display: inline-block;
    width: 60px;
    height: 2px;
    margin: 0 .25em .25em;
    background-color: $dark;
    content: "";

    @include bp(sm) {
      width: 35px;
    }
  }
}

.wrapper {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10rem;
  justify-content: space-between;

  @include bp(sm) {
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    grid-gap: 4rem;

    > *:last-child {
      grid-column: span 2;
    }
  }
}

.section {
  padding: 10rem 0;

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
