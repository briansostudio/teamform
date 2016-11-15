import Home from './Home'
import Event from './Event'
import EventAdmin from './EventAdmin'
import TeamManagement from './TeamManagement'
import Team from './Team'
import User from './User';
import Login from './Login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/event',
    name: 'event',
    component: Event
  },
  {
    path: '/event/:eventId/admin',
    name: 'event admin',
    component: EventAdmin
  },
  {
    path: '/event/:eventId/team/:teamId/',
    name: 'team',
    component: Team
  },
  {
    path: '/event/:eventId/team/:teamId/manage',
    name: 'team management',
    component: TeamManagement
  },
  {
    path: '/event/:eventId/user/:userId/',
    name: 'user',
    component: User
  },
  {
    path: '/event/:eventId/login',
    name: 'auth',
    component: Login
  }
];

export default routes;
