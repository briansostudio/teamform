import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'vue2-animate/dist/vue2-animate.min.css'
import '../theme/index.css'

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

  if(to.params.teamId){
    store.dispatch("team/onLoad",{teamId:to.params.teamId});
  }
});

const app = new Vue({
  router,
  store
}).$mount('#app');
