<template>
  <ModuleAbout class="theme-dark">
    <ComponentOverlay
      slot="overlay"
      :duration="duration"
      :is-leaving="isLeaving"
    />
  </ModuleAbout>
</template>

<script>
import ModuleAbout from '@/modules/About'
import MixinPage from '@/mixins/components/page'

export default {
  name: 'About',
  components: {
    ModuleAbout,
  },
  mixins: [MixinPage],
}
</script>
