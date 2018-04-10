// app.js

import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import App from './App.vue';
import Routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


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