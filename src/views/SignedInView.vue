<template>
  <main class="bg-gray-50">
    <LoggedInNav />
    <RecipesCard v-if="recipeStore.fromSupabase === true" />
    <MealDbCards v-else />
    <FetchingRecipes />
    <FloatingButton />
  </main>
</template>
<script setup>
import FetchingRecipes from '../components/FetchingRecipes.vue';
import FloatingButton from '../components/FloatingButton.vue';
import LoggedInNav from '../components/LoggedInNav.vue';
import MealDbCards from '../components/MealDbCards.vue';
import RecipesCard from '../components/RecipesCard.vue';
import router from '../router';
import { useAuthStore } from '../stores/authStore';
import { useRecipeStore } from '../stores/recipeStore'

const recipeStore = useRecipeStore()
const authStore = useAuthStore();

if (authStore.isLoggedIn === false) {
  router.push('/home')
}
</script>
