export default {
  activate({ commit, dispatch }) {
    commit('activate')
    dispatch('hide')
    dispatch('repulse')
  },
  attract({ commit, state }, target) {
    if (!state.isCovering && !state.isExpanding) {
      commit('attract', target)
    }
  },
  cover({ commit, dispatch, state }, callback) {
    if (!state.isExpanding) {
      commit('cover')

      setTimeout(() => {
        dispatch('loading/destroy', null, { root: true })
        callback()
      }, state.duration)
    }
  },
  expand({ commit, dispatch, state }, callback) {
    if (!state.isCovering) {
      commit('expand')

      setTimeout(() => {
        dispatch('loading/destroy', null, { root: true })
        callback()
      }, state.duration)
    }
  },
  deactivate({ commit }) {
    commit('deactivate')
  },
  hide({ commit, state }) {
    if (!state.isCovering && !state.isExpanding) {
      commit('hide')
    }
  },
  repulse({ commit, state }) {
    if (!state.isCovering && !state.isExpanding) {
      commit('repulse')
    }
  },
  show({ commit, state }) {
    if (!state.isCovering && !state.isExpanding) {
      commit('show')
    }
  },
  shrink({ commit }) {
    commit('shrink')
  },
  uncover({ commit }) {
    commit('uncover')
  },
}
