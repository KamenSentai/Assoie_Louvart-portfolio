export default {
  cover({ commit, state }, callback) {
    commit('cover')

    setTimeout(() => {
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
