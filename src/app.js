// app.js

import "babel-polyfill";
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import store from './store'
import App from './App.vue';
import Routes from './routes/routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes // short for `routes: routes`
});

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
