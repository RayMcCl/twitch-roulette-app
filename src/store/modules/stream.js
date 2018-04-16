/**
 * Copyright 2018
 * www.raymccl.com
 * 
 * @name stream.js
 * @author Ray McClain
 * @desc 
 * 
 * Last Modified: Sunday, 15th April 2018 4:06:07 pm
 * Modified By: Ray McClain (reibmc@gmail.com>)
 */

import API from '~/services/api-service';

const MAX_PREVIOUS = 10;

export default {
    state: {
        data: {},
        previousData: []
    },
    getters: {
        data: state => state.data,
        previousData: state => state.previousData
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
                        commit('setStream', res.data[0]);
                        resolve();
                    })
                    .catch(() => {
                        reject();
                    });
            });
        },
        setPreviousStream ({commit}) {
            commit('setPreviousStream');
        }
    },
    mutations: {
        setStream (state, data) {
            state.previousData.push(state.data);
            
            if(state.previousData.length > MAX_PREVIOUS) {
                state.previousData.shift();
            }

            state.data = data;
        },
        setPreviousStream (state, data) {
            if(state.previousData.length > 1){
                state.data = state.previousData.pop();
            }
        }
    }
}
