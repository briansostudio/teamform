/**
 * Created by brianso on 15/11/2016.
 */
import routes from './routes'
import VueRouter from 'vue-router'

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
