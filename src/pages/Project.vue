<template>
  <div
    v-if="!isNotFound"
    class="font-null"
  >
    <ModuleProject :project="project" />
    <ModuleFooter
      :cover="next.cover"
      :is-clickable="isClickable"
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
import MixinPage from '@/mixins/components/page'

export default {
  name: 'Project',
  components: {
    ModuleFooter,
    ModuleProject,
  },
  mixins: [MixinPage],
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isClickable: true,
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
        this.isClickable = true
        this.mount()
        this.hide()
      })
    },
  },
  beforeRouteUpdate(_, __, next) {
    this.isClickable = false
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
