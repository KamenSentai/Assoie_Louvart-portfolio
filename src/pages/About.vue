<template>
  <ModuleAbout
    class="theme-dark"
    :content="about.content"
  />
</template>

<script>
import { mapGetters } from 'vuex'
import ModuleAbout from '@/modules/About'
import MixinPage from '@/mixins/components/page'

export default {
  name: 'About',
  components: {
    ModuleAbout,
  },
  mixins: [MixinPage],
  computed: mapGetters('site', ['about']),
  metaInfo() {
    return {
      title: this.about.title,
      meta: [
        {
          name: 'description',
          content: this.about.description,
        },
      ],
    }
  },
}
</script>
