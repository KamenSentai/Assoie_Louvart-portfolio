import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

export const window = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
}
