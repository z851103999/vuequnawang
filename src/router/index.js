import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('@/views/City/City.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
