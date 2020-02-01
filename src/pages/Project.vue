<template>
  <div
    v-if="!isNotFound"
    class="font-null"
  >
    <section :class="$style.intro">
      <ComponentTag text="Intro" />
      <ComponentTitle
        :class="$style.title"
        :text="project.intro.title"
      />
      <div :class="$style.wrapper">
        <ComponentList
          v-for="(list, index) in lists"
          :key="`list-${index}`"
          :title="list.title"
          :items="list.items"
        />
        <ComponentParagraph :text="project.intro.text" />
      </div>
    </section>
    <template v-for="(section, index) in project.sections">
      <ComponentScreen
        :key="`screen-${index}`"
        :src="section.screen"
      />
      <section
        :key="`section-${index}`"
        :class="$style.section"
      >
        <ComponentBanner :content="section.contents" />
        <ComponentGallery
          :size="project.size"
          :media="section.media"
        />
      </section>
    </template>
    <ModuleFooter
      :cover="next.cover"
      :name="next.name"
      :slug="next.slug"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModuleFooter from '@/modules/Footer'
import { Banner as ComponentBanner } from '@/components/Banner'
import { Gallery as ComponentGallery } from '@/components/Gallery'
import { List as ComponentList } from '@/components/List'
import { Tag as ComponentTag } from '@/components/Tag'
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Screen as ComponentScreen } from '@/components/Screen'
import { Title as ComponentTitle } from '@/components/Title'

export default {
  name: 'Project',
  components: {
    ModuleFooter,
    ComponentBanner,
    ComponentGallery,
    ComponentList,
    ComponentTag,
    ComponentParagraph,
    ComponentScreen,
    ComponentTitle,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isNotFound: false,
    }
  },
  computed: {
    ...mapGetters('site', ['projects']),
    project() {
      return this.projects.find(project => project.slug === this.slug)
    },
    lists() {
      return [
        {
          title: 'Role',
          items: this.project.intro.roles,
        },
        {
          title: 'What',
          items: [this.project.type, this.project.year.toString()],
        },
      ]
    },
    next() {
      return this.projects[(this.projects.indexOf(this.project) + 1) % this.projects.length]
    },
  },
  created() {
    this.isNotFound = !this.projects.map(project => project.slug).includes(this.slug)
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
  padding: 20rem 0;

  @include bp(md) {
    padding: 8rem 0;
  }

  @include bp(sm) {
    padding: 6rem 0;
  }

  &:not(:last-of-type):nth-of-type(2n) {
    @include theme(dark);
  }
}
</style>
