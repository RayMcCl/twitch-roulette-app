/**
 * Copyright 2018
 * www.raymccl.com
 * 
 * @name stream.js
 * @author Ray McClain
 * @desc 
 * 
 * Last Modified: Monday, 9th April 2018 11:12:07 am
 * Modified By: Ray McClain (reibmc@gmail.com>)
 */

import API from '~/services/api-service';

export default {
    state: {
        data: {}
    },
    getters: {
        data: state => state.data
    },
    actions: {
        setStream ({commit}, data) {
            commit('setStream', data);
        },
        setRandomStream ({commit}) {
            return new Promise((resolve, reject) => {
                API
                    .getRandomStream()
                    .then((res) => {
                        commit('setStream', res.data);
                        resolve();
                    })
                    .catch(() => {
                        reject();
                    });
            });
        }
    },
    mutations: {
        setStream (state, data) {
            state.data = data
        }
    }
}