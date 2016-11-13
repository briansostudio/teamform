import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from './store'

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

sync(store, router)

const app = new Vue({
  router,
  store
}).$mount('#app');