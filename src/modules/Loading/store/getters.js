export default {
  isCompleted(state) {
    return state.isCompleted
  },
  isLoaded(state) {
    return state.progression === 1
  },
  isMounted(state) {
    return state.isMounted
  },
  progression(state) {
    return Math.floor(state.progression * 100)
  },
}
