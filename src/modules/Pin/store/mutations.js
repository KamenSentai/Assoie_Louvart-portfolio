export default {
  activate(state) {
    state.isActivated = true
  },
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
  deactivate(state) {
    state.isActivated = false
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
  shrink(state) {
    state.isExpanding = false
  },
  uncover(state) {
    state.isCovering = false
  },
}
