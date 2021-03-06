/**
 * Created by Alan on 2017/6/5.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import common from './modules/common'
import user from './modules/user'
import order from './modules/order'
import technicians from './modules/technicians'
import item from './modules/item'
import subscribe from './modules/subscribe'
import me from './modules/me'
import createLogger from '@/common/js/logger.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    common,
    user,
    order,
    technicians,
    item,
    subscribe,
    me
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
