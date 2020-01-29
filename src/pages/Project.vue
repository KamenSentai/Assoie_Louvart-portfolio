<template>
  <div />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Project',
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
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      next(
        vm.$store.getters['site/projects']
          .map(project => project.slug)
          .includes(to.params.slug)
          ? undefined
          : { name: 'not-found', params: { slug: to.params.slug } },
      )
    })
  },
  computed: {
    ...mapGetters('site', ['projects']),
    project() {
      return this.projects.find(project => project.slug === this.slug)
    },
  },
  created() {
    this.isNotFound = !this.projects.map(project => project.slug).includes(this.slug)
  },
}
</script>

<style lang="scss" module>
</style>
