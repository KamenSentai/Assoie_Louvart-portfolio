<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isHidden]: !isCompleted,
      }
    ]"
  >
    <component
      :is="$isHome ? 'h1' : 'router-link'"
      :to="!$isHome && { name: 'home' }"
      :class="$style.title"
      :title="!$isHome && ($isProject ? 'Assoïe Louvart' : 'About')"
    >
      <ComponentIcon
        v-if="$isProject || ($isMobile && $isAbout)"
        name="Return"
        width="20px"
      />
      <!-- Raw text -->
      <span
        v-if="$isHome || !$isMobile"
        :class="$style.link"
      >
        {{ !$isProject ? 'Assoïe Louvart' : 'Back to my projects' }}
      </span>
    </component>
    <router-link
      :to="{ name: $isAbout ? 'home' : 'about' }"
      :class="$style.link"
      :title="$isAbout ? 'Assoïe Louvart' : 'About'"
    >
      <!-- Raw text -->
      {{ $isAbout ? 'All projects' : 'About' }}
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Icon as ComponentIcon } from '@/components/Icon'

export default {
  name: 'Header',
  components: {
    ComponentIcon,
  },
  computed: mapGetters('loading', ['isCompleted']),
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 8rem;
  transition: transform $smooth-slow, opacity $smooth-slow;

  @include bp(sm) {
    padding: 3rem 2rem;
  }

  &.isHidden {
    transform: translateY(-25%);
    opacity: 0;
  }
}

.title {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: center;
  font-size: 0;
  cursor: pointer;
}

.link {
  font-weight: 400;
  font-size: 1.8rem;
  cursor: pointer;
}
</style>
