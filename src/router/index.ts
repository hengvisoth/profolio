import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'


const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
  ]
})

export default router
