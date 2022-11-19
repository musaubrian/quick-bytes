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
    },
    {
      path: '/:id',
      name: 'recipe',
      component: ()=> import('../views/SingleRecipe.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: ()=> import('../views/SearchView.vue')
    }
  ]
})

export default router
