/**
 * Copyright 2018
 * www.raymccl.com
 * 
 * @name index.js
 * @author Ray McClain
 * @desc 
 * 
 * Last Modified: Monday, 9th April 2018 12:53:56 am
 * Modified By: Ray McClain (reibmc@gmail.com>)
 */

import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
import stream from './modules/stream';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stream
    }
});