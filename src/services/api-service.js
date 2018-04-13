/**
 * Copyright 2018
 * www.raymccl.com
 * 
 * @name api-service.js
 * @author Ray McClain
 * @desc 
 * 
 * Last Modified: Sunday, 8th April 2018 11:28:03 pm
 * Modified By: Ray McClain (reibmc@gmail.com>)
 */

import axios from 'axios';

const API = 'https://streamroulette.net/api/streams';

class APIService {
    constructor () {

    }

    getRandomStream () {
        return axios.get(API);
    }
}

export default (new APIService());
