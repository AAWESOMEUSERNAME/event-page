import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/2024'
    },
    {
      path: '/2024',
      component: () => import('../views/2024/2024.vue')
    }
  ]
})

export default router
