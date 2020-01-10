export default {
  load({ commit }, resources) {
    const { length } = resources
    let loaded = 0

    const update = () => {
      loaded += 1
      commit('update', loaded / length)
    }

    resources.forEach((resource) => {
      const image = new Image()

      image.addEventListener('load', update)
      image.addEventListener('error', update)

      image.src = resource
    })
  },
}
