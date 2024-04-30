import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/content',
      name: 'content',
      component: () => import('@views/ContentView.vue'),
      children: [
        {
          path: 'tune',
          name: 'content',
          component: () => import('@content/InstrumentalPlayer.vue')
        },
        {
          path: 'acapella',
          name: 'content',
          component: () => import('@content/AcapellaPlayer.vue')
        }
      ]
    }
  ]
})

export default router
