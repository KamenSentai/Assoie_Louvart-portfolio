export default {
  duration(state) {
    return state.duration
  },
  isCovering(state) {
    return state.isCovering
  },
  isDisplayed(state) {
    return state.isDisplayed && !state.isCovering
  },
}
