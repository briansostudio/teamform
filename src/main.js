import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import Element from 'element-ui'

import 'vue-animate/dist/vue-animate.min.css'

Vue.use(VueRouter)
Vue.use(Element)


sync(store, router)

router.afterEach((to, from)=>{
  console.log("AFTER_EACH", from.path, to.path);
  if(!from.params.eventId && to.params.eventId){
    store.dispatch("event/onLoad",{eventId:to.params.eventId});
  }else if(from.params.eventId && !to.params.eventId){
    store.dispatch("event/onLeave",{eventId:from.params.eventId});
  }
});

const app = new Vue({
  router,
  store
}).$mount('#app');
