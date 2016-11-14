import Home from './Home'
import Event from './Event'
import AdminPage from './AdminPage'
import Manage from './Manage'
import MemberList from './MemberList'
import Schedule from './components/WeeklySchedule/WeeklyScheduleTest.vue';
import Auth from './Auth'
import Team from './Team'


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
    path: '/admin',
    name: 'admin',
    component: AdminPage
  },
  {
    path: '/manage/:teamid',
    name: 'manage',
    component: Manage
  },
  {
    path: '/schedule/',
    name: 'schedule',
    component: Schedule
  },
  {
	path: '/memberList/:teamid',
	name: 'memberList',
	component: MemberList
　},
  {
    path: '/login',
    name: 'auth',
    component: Auth
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  }
]

export default routes;