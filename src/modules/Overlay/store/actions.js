export default {
  hide({ commit }) {
    commit('hide')
  },
  nail({ commit }, position) {
    commit('nail', position)
  },
  show({ commit }) {
    commit('show')
  },
}
