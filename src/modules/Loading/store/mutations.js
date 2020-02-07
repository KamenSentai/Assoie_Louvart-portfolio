export default {
  complete(state) {
    state.isCompleted = true
  },
  destroy(state) {
    state.isMounted = false
  },
  mount(state) {
    state.isMounted = true
  },
  update(state, value) {
    state.progression = value
  },
}
