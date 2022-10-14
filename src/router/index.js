import Vue from 'vue'
import VueRouter from 'vue-router'
// Home 
import Home from '../views/Home/Home.vue'
// About 
import About from '../views/About/About.vue'
import Events from '../views/About/Events.vue'
import EventSingle from '../views/About/EventSingle.vue'
import Schedule from '../views/About/Schedule.vue'
// import notFound from '../views/About/404.vue'
// Classes 
import Classes from '../views/Classes/Classes.vue'
import ClassSingle from '../views/Classes/ClassSingle.vue'
// Teachers 
import Teachers from '../views/Teachers/Teachers.vue'
import TeacherSingle from '../views/Teachers/TeacherSingle.vue'
// Blog
import Blog from '../views/Blog/Blog.vue'
import BlogSingle from '../views/Blog/BlogSingle.vue'
// Contacts 
import Contacts from '../views/Contacts/Contacts.vue'


Vue.use(VueRouter)

const routes = [
  // Home 
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // About 
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/about/events',
    name: 'events',
    component: Events,
  },
  {
    path: '/about/events/event/:event',
    name: 'event-single',
    component: EventSingle,
    alisa: '/events/event',
    props: true
  },
  {
    path: '/about/schedule',
    name: 'schedule',
    component: Schedule,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/About/404.vue'),
  },
  // Classes
  {
    path: '/classes',
    name: 'classes',
    component: Classes,
  },
  {
    path: '/classes/class/:singleClass',
    name: 'classes-single',
    component: ClassSingle,
    alisa: '/classes/class',
    props: true
  },
  // Teachers
  {
    path: '/teachers',
    name: 'teachers',
    component: Teachers,
  },
  {
    path: '/teachers/teacher/:singleTeacher',
    name: 'teacher-single',
    component: TeacherSingle,
    alisa: '/teachers/teacher',
    props: true
  },
  // Blog 
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/blog-single',
    name: 'blog-single',
    component: BlogSingle,
  },
  // Contacts 
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
