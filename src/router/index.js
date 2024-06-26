import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'
import { tune, song } from '@media'

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
          component: () => import('@content/AudioPlayer.vue'),
          props: {
            src: tune
          }
        },
        {
          path: 'song',
          name: 'content',
          component: () => import('@content/AudioPlayer.vue'),
          props: {
            src: song
          }
        }
      ]
    }
  ]
})

export default router
