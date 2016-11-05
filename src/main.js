import Vue from 'vue'
import App from './App'
import Event from './Event'
import MemberList from './MemberList'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueRouter)
Vue.use(VueFire)

const fb = Firebase.initializeApp({
	apiKey: "AIzaSyB37sX4oAPk10vSdiUdmWehnnGJf4KXk-8",
	authDomain: "teamform-14254.firebaseapp.com",
	databaseURL: "https://teamform-14254.firebaseio.com",
	storageBucket: "teamform-14254.appspot.com",
	messagingSenderId: "250682606003"
})

const db = fb.database()

const routes = [
	{
		path: '/',
		name: 'home',
		component: App 
	},
	{
		path: '/event/:id',
		name: 'event',
		component: Event
	},
	{
		path: '/memberList/:teamid',
		name: 'memberList',
		component: MemberList
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

const app = new Vue({
	router,
	firebase: {
		root: db.ref('/'),
		events: db.ref('/events')
	},
	data: {
		db : db
	}
}).$mount('#app')