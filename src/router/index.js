import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/skills',
    name: 'Skill',
    component: () => import(/* webpackChunkName: "skill" */ '../views/MySkill.vue'),
    meta:{transtion:'ts-skill'}
  },
  {
    path: '/contactus',
    name: 'ContacUs',
    component: () => import(/* webpackChunkName: "contactus" */ '../views/ContactUs.vue'),
    meta:{transtion:'ts-contactus'}
  },
  {
    path: '/detailimage',
    name: 'DetailImage',
    component: () => import(/* webpackChunkName: "detailimage" */ '../views/DetailImage.vue'),
    meta:{transtion:'ts-detailimage'}
  },
  {
    path: '/home2',
    name: 'Home2',
    component: () => import(/* webpackChunkName: "home2" */ '../views/Home2.vue'),
    meta:{transtion:'ts-home2'}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
