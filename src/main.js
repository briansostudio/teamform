import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

sync(store, router)

const app = new Vue({
  router,
});