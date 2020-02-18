<template>
  <ModuleAbout class="theme-dark" />
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
