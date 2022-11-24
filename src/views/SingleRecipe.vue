<template>
    <SingleSupaRecipe v-if="recipeStore.fromSupabase === true" />
    <SingleSearchRecipe v-else />
    <FetchingRecipes />
</template>

<script setup>
import SingleSupaRecipe from '../components/SingleSupaRecipe.vue';
import SingleSearchRecipe from '../components/SingleSearchRecipe.vue';
import { useRecipeStore } from '../stores/recipeStore';
import FetchingRecipes from '../components/FetchingRecipes.vue';

const recipeStore = useRecipeStore()


</script>