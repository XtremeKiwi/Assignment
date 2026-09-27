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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Operations.vue'),
    },
        {
      path: '/userstats',
      name: 'userstats',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserStats.vue'),
    }
  ],
})

export default router
