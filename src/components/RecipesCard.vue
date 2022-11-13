<template>
    <div class="grid grid-cols-3 gap-2 w-auto mt-4 px-5 md:px-10">
        <div class="col-span-3 md:col-span-1 border-2 rounded-md flex flex-col p-2 items-center justify-center capitalize my-1"
            v-for="recipe in recipeStore.recipes">
            <div class="inline-flex w-full justify-end">
                <span class="border-2 border-orange-400 p-2 rounded-xl text-xs text-center">
                    {{ recipe.duration }}mins</span>
            </div>
            <h1 class="text-gray-800 text-2xl text-center font-bold">{{ recipe.title }}</h1>
            <span class="text-gray-600">Ingredients:</span>
            <p class="text-center">{{ recipe.ingredients }}</p>
            <span class="inline-flex
            ">Possible allergens:</span>
            <p class="text-red-300"> {{ recipe.allergen }}</p>

            <p>{{ recipe.tags }}</p>
            <p class="text-center p-3">{{ recipe.process }}</p>


        </div>
    </div>
    <div class="flex flex-col justify-center items-center mt-3" v-if="recipeStore.fetchingRecipes === true">
        <h1 class="text-lg text-gray-600 font-bold">Fetching deliciousness...</h1>
    </div>
    <div class="flex flex-col justify-center items-center mt-3" v-if="recipeStore.fetchError === true">
        <h1 class="text-red-500 font-bold text-xl">Couldn't fetch recipes</h1>
        <p class="text-red-400 text-lg">Check your connection</p>
    </div>
</template>

<script setup>
import { useRecipeStore } from '../stores/recipeStore'
const recipeStore = useRecipeStore();
recipeStore.getRecipes

</script>