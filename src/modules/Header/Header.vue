<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isHidden]: isExpanding,
      }
    ]"
  >
    <component
      :is="$isHome ? 'h1' : 'router-link'"
      :to="!$isHome && { name: 'home' }"
      :class="[$style.link, !$isHome && 'link']"
      :title="!$isHome && ($isProject ? NAME : 'About')"
    >
      <!-- Raw text -->
      {{ !$isProject ? NAME : 'Back to my projects' }}
    </component>
    <router-link
      ref="target"
      :to="{ name: $isAbout ? 'home' : 'about' }"
      :class="[
        $style.link,
        {
          ['link']: $isAbout,
          [$style.isLightable]: $isHome,
        }
      ]"
      :title="$isAbout ? NAME : 'About'"
      @mouseover.native="show"
      @mouseleave.native="hide"
    >
      <!-- Raw text -->
      {{ $isAbout ? 'All projects' : 'About' }}
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters('pin', ['isExpanding']),
    ...mapGetters('window', ['scrollY']),
  },
  methods: {
    ...mapActions('pin', ['attract', 'repulse']),
    show() {
      if (!this.$isAbout) {
        const { $el: target } = this.$refs.target

        this.attract(target ? {
          x: target.offsetLeft + target.clientWidth / 2,
          y: target.offsetTop + target.clientHeight / 2 - this.scrollY,
        } : null)
      }
    },
    hide() {
      if (!this.$isAbout) {
        this.repulse()
      }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 6rem;
  transition: opacity $smooth;

  @include bp(sm) {
    padding: 3rem 2rem;
  }
}

.isHidden {
  opacity: 0;
  pointer-events: none;
}

.link {
  padding: 2rem;
  font-weight: 400;
  font-size: 1.8rem;
  cursor: pointer;
}

.isLightable {
  transition: color $smooth;

  &:hover {
    color: $white;
  }
}
</style>
