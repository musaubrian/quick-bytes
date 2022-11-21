<template>
    <div class="grid grid-cols-4 gap-4 w-auto mt-4 px-5 md:px-10 mb-20">
        <div class="col-span-4 md:col-span-2 border-2 border-gray-300 rounded-lg flex flex-col px-4 py-2 items-center justify-around capitalize shadow-md"
            v-for="recipe in recipeStore.recipes" :key="recipe.id">
            <div class="inline-flex w-full justify-end py-2">
                <div class="w-full object-cover">
                    <img :src="recipe.imgLink" alt="recipe image" v-if="recipe.imgLink != ''"
                        class="w-full h-11 rounded-full pr-1 object-cover object-center hover:brightness-50 hover:scale-105">
                </div>
                <span
                    class=" bg-blue-500 text-gray-100 p-2 rounded-full text-xs text-center inline-flex items-center justify-center">
                    <i class="material-icons text-sm text-center">alarm</i>
                    {{ recipe.duration }}mins
                </span>
            </div>
            <h1 class="text-gray-800 text-2xl text-center font-bold">{{ recipe.title }}</h1>
            <span class="text-gray-700 text-start w-full font-bold inline-flex items-center text-lg">Ingredients:</span>
            <p class="text-start ml-2 mb-2 w-full font-normal text-gray-700">
                {{
                        recipe.ingredients
                }}</p>

            <span class="text-gray-700 text-start w-full font-bold inline-flex items-center text-lg">Possible allergens:
            </span>
            <p class="text-start ml-2 mb-2 w-full font-normal  text-orange-500">
                {{
                        recipe.allergen
                }}</p>
            <span @click="recipeStore.routeToId(recipe.id)" class="text-gray-700 underline my-2 cursor-pointer">Show
                full
                recipe</span>
        </div>
    </div>

    <FetchingRecipes />

</template>

<script setup>
import { useRecipeStore } from '../stores/recipeStore'
import FetchingRecipes from './FetchingRecipes.vue';
const recipeStore = useRecipeStore();
recipeStore.getRecipes


</script>

