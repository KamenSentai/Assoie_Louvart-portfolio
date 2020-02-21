<template>
  <div :class="$style.container">
    <ComponentTitle
      giant
      :text="error.title"
    />
    <div :class="$style.wrapper">
      <h2 :class="$style.subtitle">
        {{ error.subtitle }}
      </h2>
      <div :class="$style.texts">
        <p
          v-for="(paragraph, index) in error.paragraphs"
          :key="`paragraph-${index}`"
        >
          {{ paragraph }}
        </p>
      </div>
      <router-link
        :to="{ name: 'home' }"
        :class="$style.link"
        :title="NAME"
      >
        <div
          class="font-null"
          :class="$style.icon"
        >
          <ComponentIcon
            color="light"
            name="Arrow"
            transform="rotate(90)"
            width="20px"
          />
        </div>
        {{ error.link }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Icon as ComponentIcon } from '@/components/Icon'
import { Title as ComponentTitle } from '@/components/Title'

export default {
  name: 'Error',
  components: {
    ComponentIcon,
    ComponentTitle,
  },
  computed: mapGetters('site', ['error']),
}
</script>

<style lang="scss" module>
.container {
  align-self: center;
  justify-self: center;
  padding: 4rem;
  text-align: center;

  @include centralizer(grid) {
    grid-gap: 3rem;

    @include bp(sm) {
      grid-gap: 2rem;
    }
  }
}

.wrapper {
  display: grid;
  font-weight: 400;
  font-size: 2rem;

  @include bp(md) {
    font-size: 1.8rem;
  }

  @include bp(sm) {
    font-size: 1.6rem;
  }
}

.subtitle {
  text-transform: uppercase;
}

.texts {
  margin: 1rem 0 7rem;
  line-height: 1.5;

  @include bp(md) {
    margin: 1rem 0 5rem;
  }

  @include bp(sm) {
    margin: 1rem 0 3rem;
  }
}

.link {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: center;
  justify-self: flex-start;

  &:hover .icon {
    transform: translateX(-50%);
  }
}

.icon {
  transition: transform $smooth-quick;
}
</style>
