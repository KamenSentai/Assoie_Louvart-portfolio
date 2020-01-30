<template>
  <div>
    <div :class="$style.intro">
      <div :class="$style.tag">
        Intro
      </div>
      <h2 :class="$style.title">
        {{ project.intro.title }}
      </h2>
      <div :class="$style.sheet">
        <div :class="$style.section">
          <div :class="$style.tag">
            Role
          </div>
          <p
            v-for="(role, index) in project.intro.roles"
            :key="`role-${index}`"
            :class="$style.text"
          >
            {{ role }}
          </p>
        </div>
        <div :class="$style.section">
          <div :class="$style.tag">
            What
          </div>
          <p :class="$style.text">
            {{ project.type }}
          </p>
          <p :class="$style.text">
            {{ project.year }}
          </p>
        </div>
        <div :class="$style.section">
          <p :class="$style.text">
            {{ project.intro.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Project',
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
  },
  created() {
    this.isNotFound = !this.projects.map(project => project.slug).includes(this.slug)
  },
}
</script>

<style lang="scss" module>
.intro {
  padding: 20rem 22rem;

  @include bp(md) {
    padding: 8rem 4rem;
  }

  @include bp(sm) {
    padding: 8rem 3.5rem 6rem;
  }

  .title::after {
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

.tag {
  margin-bottom: 1rem;;
  font-weight: 600;
  font-size: 1.8rem;
  text-transform: uppercase;

  @include bp(sm) {
    font-size: 1.6rem;
  }

  ~ .text {
    line-height: 1.5;
  }
}

.title {
  margin-bottom: 12rem;
  font-weight: 700;
  font-size: 4rem;
  font-family: $font-title;

  @include bp(sm) {
    margin-bottom: 4rem;
    font-size: 2.2rem;
  }
}

.sheet {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10rem;
  justify-content: space-between;

  @include bp(sm) {
    grid-auto-flow: row;
    grid-gap: 4rem;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
  }
}

.section {

  &:last-child {
    @include bp(sm) {
      grid-area: 2 / span 2;
    }
  }
}

.text {
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.25;

  @include bp(sm) {
    font-size: 1.6rem;
  }
}
</style>
