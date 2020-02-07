<template>
  <ModuleAbout class="theme-dark" />
</template>

<script>
import ModuleAbout from '@/modules/About'
import MixinMount from '@/mixins/pages/mount'

export default {
  name: 'About',
  components: {
    ModuleAbout,
  },
  mixins: [MixinMount],
}
</script>
