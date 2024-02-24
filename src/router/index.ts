import { PATH } from '@/constants/pages'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/components/Frame.vue'),
      children: [
        {
          path: '/',
          redirect: PATH.HOME
        },
        {
          path: PATH.HOME,
          component: () => import('../views/pages/home/index.vue')
        },
        {
          path: PATH.INSTRUCTORS,
          component: () => import('../views/pages/instructors/index.vue')
        },
        {
          path: PATH.MUSIC,
          component: () => import('../views/pages/music/index.vue')
        },
        {
          path: PATH.COMPETITION,
          component: () => import('../views/pages/competition/index.vue')
        },
        {
          path: PATH.VENUES,
          component: () => import('../views/pages/venues/index.vue')
        },
        {
          path: PATH.TICKETS,
          component: () => import('../views/pages/tickets/index.vue')
        },
        {
          path: PATH.SCHEDULE,
          component: () => import('../views/pages/schedule/index.vue')
        }
      ]
    },
    {
      path: '/mobile',
      component: () => import('@/views/components/Frame.vue'),
      children: [
        {
          path: '/',
          redirect: PATH.HOME
        },
        {
          path: PATH.HOME,
          component: () => import('../views/pages/home/index.vue')
        },
        {
          path: PATH.INSTRUCTORS,
          component: () => import('../views/pages/instructors/index.vue')
        },
        {
          path: PATH.MUSIC,
          component: () => import('../views/pages/music/index.vue')
        },
        {
          path: PATH.COMPETITION,
          component: () => import('../views/pages/competition/index.vue')
        },
        {
          path: PATH.VENUES,
          component: () => import('../views/pages/venues/index.vue')
        },
        {
          path: PATH.TICKETS,
          component: () => import('../views/pages/tickets/index.vue')
        },
        {
          path: PATH.SCHEDULE,
          component: () => import('../views/pages/schedule/index.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
