export default {
  cover({ commit, dispatch, state }, callback) {
    commit('cover')

    setTimeout(() => {
      dispatch('loading/destroy', null, { root: true })
      commit('disappear')
      callback()
    }, state.duration)
  },
  disappear({ commit }) {
    commit('disappear')
  },
  hide({ commit }) {
    commit('hide')
  },
  show({ commit }) {
    commit('show')
  },
}
