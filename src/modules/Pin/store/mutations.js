export default {
  cover(state) {
    state.isCovering = true
  },
  disappear(state) {
    state.isCovering = false
  },
  hide(state) {
    state.isDisplayed = false
  },
  show(state) {
    state.isDisplayed = true
  },
}
