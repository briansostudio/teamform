import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from './store'
import Element from 'element-ui'


Vue.use(VueRouter)
Vue.use(Element)

const router = new VueRouter({
  routes,
  mode: 'history'
});

sync(store, router)

const app = new Vue({
  router,
  store
}).$mount('#app');