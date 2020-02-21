export default {
  about(state) {
    return state.about
  },
  error(state) {
    return state.error
  },
  home(state) {
    return state.home
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
    return state.projects
      .sort((a, b) => a.position - b.position)
      .map((project, index) => ({ ...project, index }))
  },
  savedIndex(state) {
    return state.savedIndex
  },
}
