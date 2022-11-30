import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import signInView from "../views/SignedInView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "taste",
      component: signInView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/add",
      name: "add-recipes",
      component: () => import("../views/AddRecipes.vue"),
    },
    {
      path: "/recipe/:id",
      name: "supa-recipe",
      component: () => import("../views/SingleRecipe.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
  ],
});

export default router;
