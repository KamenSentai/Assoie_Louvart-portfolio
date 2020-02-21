<template>
  <ModuleAbout
    class="theme-dark"
    :content="about.content"
    :credits="about.credits"
  />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ModuleAbout from '@/modules/About'
import MixinPage from '@/mixins/components/page'

export default {
  name: 'About',
  components: {
    ModuleAbout,
  },
  mixins: [MixinPage],
  computed: mapGetters('site', ['about']),
  beforeRouteEnter(_, __, next) {
    next((vm) => {
      vm.deactivate()
      vm.shrink()
    })
  },
  methods: mapActions('pin', ['deactivate', 'shrink']),
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
