import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PollDetail from '../components/PollDetail.vue';
import CreatePollView from '../views/CreatePollView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/polls/:id',
      name: 'poll-detail',
      component: PollDetail
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePollView
    }
  ]
})

export default router
