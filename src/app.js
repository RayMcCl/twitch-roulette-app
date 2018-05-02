// app.js

import "babel-polyfill";
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import store from './store'
import App from './App.vue';
import Routes from './routes/routes';

import '~/assets/css/darkly.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { Button } from 'bootstrap-vue/es/components';
import { Nav } from 'bootstrap-vue/es/components';
import { Jumbotron } from 'bootstrap-vue/es/components';
import { Embed } from 'bootstrap-vue/es/components';
import { Table } from 'bootstrap-vue/es/components';

Vue.use(Table);
Vue.use(Embed);
Vue.use(Jumbotron);
Vue.use(Nav);
Vue.use(Button);

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes // short for `routes: routes`
});

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
