<template>
    <!-- <div v-for="recipe in searchStore.searchResults" :key="recipe.idMeal">
        <span>{{ recipe.meals }}</span>
    </div> -->
    <div>search stuff</div>
</template>

<script setup>
import { useSearchStore } from '../stores/searchStore';
import { useAuthStore } from '../stores/authStore';
import router from '../router';
const searchStore = useSearchStore();
const authStore = useAuthStore();

searchStore.searchForRecipe
if (authStore.isLoggedIn === false) {
    router.push('/home')
}
</script>