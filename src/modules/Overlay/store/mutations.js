export default {
  hide(state) {
    state.isHidding = true
  },
  nail(state, position) {
    state.origin = position
  },
  show(state) {
    state.isHidding = false
  },
}
