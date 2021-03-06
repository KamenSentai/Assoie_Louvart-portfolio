import { types } from '@/utils/types'

export default {
  complete({ commit }) {
    commit('complete')
  },
  destroy({ commit }) {
    commit('destroy')
  },
  load({ commit }, resources) {
    const { length } = resources
    let loaded = 0

    const update = () => {
      loaded += 1
      commit('update', loaded / length)
    }

    resources.forEach((resource) => {
      const type = `.${resource.split('.').splice(-1)[0]}`

      if (Object.keys(types).includes(type)) {
        const image = new Image()

        image.addEventListener('load', update)
        image.addEventListener('error', update)

        image.src = resource
      } else {
        update()
      }
    })
  },
  mount({ commit }) {
    commit('mount')
  },
}
