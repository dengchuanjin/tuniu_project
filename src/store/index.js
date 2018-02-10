import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './Agencies/actions'
// import mutations from './Agencies/mutations'

import agencies from './Agencies'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  modules:{
    agencies
  },
  strict: debug,
})
