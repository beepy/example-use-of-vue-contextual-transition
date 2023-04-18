import { createRouter, createWebHistory } from 'vue-router'
// import { useContextualTransition } from 'vue-contextual-transition'
import HomeView from '../views/HomeView.vue'
// import BlogView from '../views/BlogView.vue'
// import PostView from '../views/PostView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      // meta: { transition: useContextualTransition({ speed: 4000 }) }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
      // meta: { transition: useContextualTransition({ speed: 4000 }) }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blog/:slug',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/authors/:slug',
      component: () => import('../views/AuthorView.vue')
    }
  ]
})

export default router
