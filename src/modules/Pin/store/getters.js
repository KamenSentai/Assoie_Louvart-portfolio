export default {
  duration(state) {
    return state.duration
  },
  isAttracted(state) {
    return state.isAttracted && !state.isExpanding
  },
  isCovering(state) {
    return state.isCovering
  },
  isDisplayed(state) {
    return state.isDisplayed && !state.isCovering
  },
  isExpanding(state) {
    return state.isExpanding
  },
  target(state) {
    return state.target
  },
}
