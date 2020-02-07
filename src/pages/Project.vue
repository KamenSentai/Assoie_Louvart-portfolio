<template>
  <div
    v-if="!isNotFound"
    class="font-null"
  >
    <ModuleProject :project="project" />
    <ModuleFooter
      :cover="next.cover"
      :name="next.name"
      :slug="next.slug"
      @mouseover="show"
      @mouseout="hide"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ModuleFooter from '@/modules/Footer'
import ModuleProject from '@/modules/Project'
import MixinMount from '@/mixins/pages/mount'

export default {
  name: 'Project',
  components: {
    ModuleFooter,
    ModuleProject,
  },
  mixins: [MixinMount],
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
    next() {
      return this.projects[(this.projects.indexOf(this.project) + 1) % this.projects.length]
    },
  },
  watch: {
    project({ index }) {
      this.updateIndex(index)
      this.$nextTick(() => {
        this.mount()
      })
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.hide()
    this.cover(next)
  },
  created() {
    this.isNotFound = !this.projects.map(project => project.slug).includes(this.slug)

    if (!this.isNotFound) {
      this.updateIndex(this.project.index)
    }
  },
  methods: {
    ...mapActions('loading', ['mount']),
    ...mapActions('pin', ['cover', 'hide', 'show']),
    ...mapActions('site', ['updateIndex']),
  },
}
</script>
