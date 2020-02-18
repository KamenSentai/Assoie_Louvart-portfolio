export default {
  attract({ commit, state }, target) {
    if (!state.isCovering) {
      commit('attract', target)
    }
  },
  cover({ commit, dispatch, state }, callback) {
    if (!state.isExpanding) {
      commit('cover')

      setTimeout(() => {
        dispatch('loading/destroy', null, { root: true })
        commit('disappear')
        callback()
      }, state.duration)
    }
  },
  expand({ commit, dispatch, state }, callback) {
    if (!state.isCovering) {
      commit('expand')

      setTimeout(() => {
        dispatch('loading/destroy', null, { root: true })
        commit('fade')
        callback()
      }, state.duration)
    }
  },
  disappear({ commit }) {
    commit('disappear')
  },
  fade({ commit }) {
    commit('fade')
  },
  hide({ commit }) {
    commit('hide')
  },
  repulse({ commit }) {
    commit('repulse')
  },
  show({ commit, state }) {
    if (!state.isExpanding) {
      commit('show')
    }
  },
}
