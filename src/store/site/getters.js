export default {
  landings(_, __, ___, rootGetters) {
    return rootGetters['site/projects'].map(({
      name,
      slug,
      year,
      cover,
    }) => ({
      name,
      slug,
      year,
      cover,
    }))
  },
  projects(state) {
    return state.projects.sort((a, b) => a.position - b.position)
  },
}
