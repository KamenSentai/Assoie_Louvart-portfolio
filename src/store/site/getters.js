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
  heroes(_, __, ___, rootGetters) {
    return rootGetters['site/projects'].map(({
      name,
      slug,
      subject,
      hero,
    }) => ({
      name,
      slug,
      subject,
      hero,
    }))
  },
  projects(state) {
    return state.projects.sort((a, b) => a.position - b.position)
  },
}
