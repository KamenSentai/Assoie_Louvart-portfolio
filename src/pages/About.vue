<template>
  <div
    class="is-dark"
    :class="$style.container"
  >
    <div v-if="!$isMobile" />
    <div :class="$style.wrapper">
      <template v-for="(section, i) in about">
        <section
          v-if="!section.isSocial || $isMobile"
          :key="`section-${i}`"
        >
          <ComponentTitle
            :large="!i"
            :small="!!i"
            :tag="section.title.tag"
            :text="section.title.text"
            :class="$style.title"
          />
          <ComponentParagraph
            v-if="section.paragraph"
            :text="section.paragraph"
          />
          <div
            v-else-if="section.list"
            :class="$style.list"
          >
            <div
              v-for="(item, j) in section.list.items"
              :key="`item-${i}-${j}`"
              :class="[
                $style[section.list.class],
                {
                  [$style.isInline]: item.icon,
                }
              ]"
            >
              <template v-if="section.list.class === 'grid'">
                <span
                  v-for="(text, k) in item"
                  :key="`text-${i}-${j}-${k}`"
                >
                  {{ text }}
                </span>
              </template>
              <template v-if="section.list.class === 'link'">
                <span v-if="item.name">{{ item.name }}</span>
                <ComponentIcon
                  v-else-if="item.icon"
                  :name="item.icon"
                  height="20px"
                />
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  :href="item.link"
                  :title="item.title"
                >
                  {{ item.title }}
                </a>
              </template>
            </div>
          </div>
        </section>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Icon as ComponentIcon } from '@/components/Icon'
import { Paragraph as ComponentParagraph } from '@/components/Paragraph'
import { Title as ComponentTitle } from '@/components/Title'

export default {
  name: 'About',
  components: {
    ComponentIcon,
    ComponentParagraph,
    ComponentTitle,
  },
  computed: {
    ...mapGetters('site', ['about']),
    social() {
      return this.about.find(section => section.isSocial)
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-auto-columns: 48rem;
  grid-auto-flow: column;
  grid-gap: 4rem;
  justify-content: center;
  padding: 4rem;
  padding-bottom: 12rem;

  @include bp(lg) {
    grid-auto-columns: 40rem;
    padding-bottom: 10rem;
  }

  @include bp(md) {
    grid-auto-columns: 1fr;
    padding-bottom: 8rem;
  }

  @include bp(sm) {
    padding-bottom: 6rem;
  }
}

.wrapper {
  display: grid;
  grid-gap: 9rem;

  @include bp(md) {
    grid-gap: 7.5rem;
  }

  @include bp(sm) {
    grid-gap: 6rem;
  }
}

.title {
  margin-bottom: 6rem;

  @include bp(md) {
    margin-bottom: 5rem;
  }

  @include bp(sm) {
    margin-bottom: 4rem;
  }
}

.subtitle {
  margin-bottom: 5rem;

  @include bp(sm) {
    margin-bottom: 4rem;
  }
}

.list {
  display: grid;
  grid-gap: 6rem;
  font-size: 1.8rem;

  @include bp(sm) {
    grid-gap: 4rem;
    font-size: 1.6rem;
  }
}

.grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;

  > *:nth-child(1),
  > *:nth-child(2) {
    font-weight: 600;
  }

  > *:nth-child(2n) {
    text-align: right;
  }
}

.link {
  display: grid;
  grid-gap: 2rem;

  &.isInline {
    grid-auto-flow: column;
    justify-content: flex-start;
  }

  > *:nth-child(2) {
    font-weight: 600;
  }
}
</style>
