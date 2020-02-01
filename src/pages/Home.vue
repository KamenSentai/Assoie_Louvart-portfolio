<template>
  <ComponentHero :class="$style.container">
    <!-- TODO -->
    <div />
    <ul>
      <li
        v-for="landing in landings"
        :key="landing.slug"
      >
        <router-link
          :title="name"
          :to="{ name: 'project', params: { slug: landing.slug } }"
        >
          {{ landing.name }}
        </router-link>
      </li>
    </ul>
    <ComponentIndicator :class="$style.indicator" />
  </ComponentHero>
</template>

<script>
import { mapGetters } from 'vuex'
import { Hero as ComponentHero } from '@/components/Hero'
import { Indicator as ComponentIndicator } from '@/components/Indicator'

export default {
  name: 'Home',
  components: {
    ComponentHero,
    ComponentIndicator,
  },
  computed: mapGetters('site', ['landings']),
}
</script>

<style lang="scss" module>
.container {
  grid-gap: 0 10rem;
  grid-template-columns: 12rem 1fr 12rem;
  overflow: hidden;
}

.indicator {
  grid-area: 2 / 2;
}
</style>
