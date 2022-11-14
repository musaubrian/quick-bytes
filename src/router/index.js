import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import signInView from "../views/SignedInView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'taste',
      component: signInView
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/add',
      name: 'add-recipes',
      component: () => import('../views/AddRecipes.vue')
    }
  ]
})

export default router
