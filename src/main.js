import Vue from 'vue'
import App from './App'
import Event from './Event'
import Auth from './Auth'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueRouter)
Vue.use(VueFire)

// const fb = Firebase.initializeApp({
// 	apiKey: "AIzaSyB37sX4oAPk10vSdiUdmWehnnGJf4KXk-8",
// 	authDomain: "teamform-14254.firebaseapp.com",
// 	databaseURL: "https://teamform-14254.firebaseio.com",
// 	storageBucket: "teamform-14254.appspot.com",
// 	messagingSenderId: "250682606003"
// })

const fb = Firebase.initializeApp({
    apiKey: "AIzaSyBRhkehD5v30D1IyP4Wc7QF5FyML6AAasg",
    authDomain: "comp3111-266ca.firebaseapp.com",
    databaseURL: "https://comp3111-266ca.firebaseio.com",
    storageBucket: "comp3111-266ca.appspot.com",
    messagingSenderId: "1061138167888"
})

const auth = fb.auth();
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
		path: '/login',
		name: 'auth',
		component: Auth
    },
	// {
	// 	path: '/event/:id/login',
	// 	name: 'login',
	// 	component: Login
	// }
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
	  auth: auth,
		db : db
	}
}).$mount('#app')
