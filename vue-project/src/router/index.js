import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../views/FrontPage.vue'
import Operations from '../views/Operations.vue'
import UserStats from '../views/UserStats.vue'
import Matrix from '../views/Matrix.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontPage,
    },
    {
      path: '/operations',
      component: Operations,
    },
        {
      path: '/userstats',
      component: UserStats,
    },
            {
      path: '/matrix',
      component: Matrix,
    }
  ],
})

export default router
