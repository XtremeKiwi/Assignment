import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../views/FrontPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontpage',
      component: FrontPage,
    },
    {
      path: '/operations',
      name: 'operations',
      component: () => import('../views/Operations.vue'),
    },
        {
      path: '/userstats',
      name: 'userstats',
      component: () => import('../views/UserStats.vue'),
    }
  ],
})

export default router
