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
    ...mapGetters('pin', ['duration']),
    ...mapGetters('site', ['error', 'projects']),
    project() {
      return this.projects.find(project => project.slug === this.slug) || { name: this.error.name }
    },
    next() {
      return this.projects[(this.projects.indexOf(this.project) + 1) % this.projects.length]
    },
  },
  watch: {
    project({ index }) {
      this.deactivate()
      this.uncover()
      this.updateIndex(index)
      this.$nextTick(() => {
        this.mount()
        this.hide()
        setTimeout(this.activate, this.duration)
      })
    },
  },
  beforeRouteEnter(_, __, next) {
    next((vm) => {
      vm.deactivate()
      vm.uncover()
    })
  },
  beforeRouteUpdate(_, __, next) {
    this.hide()
    this.cover(next)
  },
  created() {
    this.isNotFound = !this.projects.map(project => project.slug).includes(this.slug)

    if (!this.isNotFound) {
      this.updateIndex(this.project.index)
    }
  },
  mounted() {
    setTimeout(this.activate, this.duration)
  },
  methods: {
    ...mapActions('loading', ['mount']),
    ...mapActions('pin', ['activate', 'deactivate', 'cover', 'hide', 'show', 'uncover']),
    ...mapActions('site', ['updateIndex']),
  },
  metaInfo() {
    return {
      title: this.project.name,
      meta: [
        {
          name: 'description',
          content: this.project.description,
        },
      ],
    }
  },
}
</script>
