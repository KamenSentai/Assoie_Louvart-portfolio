export default {
  about(state) {
    return state.about
  },
  landings(_, __, ___, rootGetters) {
    return rootGetters['site/projects'].map(({
      name,
      slug,
      subject,
      year,
      cover,
    }) => ({
      name,
      slug,
      subject,
      year,
      cover,
    }))
  },
  projects(state) {
    return state.projects.sort((a, b) => a.position - b.position)
  },
}
