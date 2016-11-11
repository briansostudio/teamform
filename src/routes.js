import Home from './Home'
import Event from './Event'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/event/:id',
    name: 'event',
    component: Event
  }
]
