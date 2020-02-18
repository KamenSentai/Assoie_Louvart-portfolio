export default {
  attract(state, target) {
    state.isAttracted = true
    state.target = target
  },
  cover(state) {
    state.isCovering = true
  },
  expand(state) {
    state.isExpanding = true
  },
  disappear(state) {
    state.isCovering = false
  },
  fade(state) {
    state.isExpanding = false
  },
  hide(state) {
    state.isDisplayed = false
  },
  repulse(state) {
    state.isAttracted = false
    state.target = null
  },
  show(state) {
    state.isDisplayed = true
  },
}
