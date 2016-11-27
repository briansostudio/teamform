/**
 * Created by brianso on 15/11/2016.
 */
import routes from './routes'
import VueRouter from 'vue-router'

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history'
});

export default router;
