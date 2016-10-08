import Vue from 'vue'
import App from './App'
import Event from './Event'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueRouter)
Vue.use(VueFire)

const routes = [
	{ path: '/', component: App },
	{ path: '/event', component: Event }
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

const app = new Vue({
	router
}).$mount('#app')