import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: App }
]

const router = new VueRouter({routes})

const app = new Vue({
  router
}).$mount('#app')