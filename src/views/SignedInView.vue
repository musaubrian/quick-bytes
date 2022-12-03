<template>
  <main class="bg-gray-50">
    <LoggedInNav />
    <RecipesCard v-if="recipeStore.fromSupabase === true" />
    <MealDbCards v-else />
    <Transition name="fade">
      <FloatingSearch v-if="searchStore.searchBoxStatus" />
    </Transition>
    <FetchingRecipes />
    <FloatingButton />
  </main>
</template>
<script setup>
import FetchingRecipes from '../components/FetchingRecipes.vue';
import FloatingButton from '../components/FloatingButton.vue';
import FloatingSearch from '../components/FloatingSearch.vue';
import LoggedInNav from '../components/LoggedInNav.vue';
import MealDbCards from '../components/MealDbCards.vue';
import RecipesCard from '../components/RecipesCard.vue';
import router from '../router';
import { useAuthStore } from '../stores/authStore';
import { useRecipeStore } from '../stores/recipeStore'
import { useSearchStore } from '../stores/searchStore';

const recipeStore = useRecipeStore()
const authStore = useAuthStore();
const searchStore = useSearchStore();

if (authStore.isLoggedIn === false) {
  router.push('/home')
}
</script>
<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
</style>
