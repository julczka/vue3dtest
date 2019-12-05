import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import page2 from '../views/page2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page',
    name: 'page',
    component: () => import('../views/page.vue')
  },

  {
    path: '/page2',
    name: 'page2',
    component: () => import('../views/page2.vue')
    //component: page2
    //component: () => import(/* webpackChunkName: "about" */ '../views/page2.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
