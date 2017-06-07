/**
 * Created by Alan on 2017/6/5.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import technicians from './modules/technician'
import createLogger from '@/common/js/logger.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    technicians
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
