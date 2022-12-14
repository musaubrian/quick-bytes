import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import signInView from "../views/SignedInView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signedin",
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
      path: "/add",
      name: "add-recipes",
      component: () => import("../views/AddRecipes.vue"),
    },
    {
      path: "/recipe/:id",
      name: "supa-recipe",
      component: () => import("../views/SingleRecipe.vue"),
    },
  ],
});

export default router;
