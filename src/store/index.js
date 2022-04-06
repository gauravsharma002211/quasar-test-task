import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// import parentModule from './parentModule'

import state from './parentModule/state'
import getters from './parentModule/getters'
import mutations from './parentModule/mutations'
import actions from './parentModule/actions'


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
