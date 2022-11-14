<template>
    <div class="grid grid-cols-4 gap-4 w-auto mt-4 px-5 md:px-10">
        <div class="col-span-4 md:col-span-2 border-2 border-gray-300 rounded-lg flex flex-col py-2 px-4 items-center justify-center capitalize shadow-md"
            v-for="recipe in recipeStore.recipes">
            <div class="inline-flex w-full justify-end py-1">
                <span
                    class=" bg-blue-500 text-gray-100 p-2 rounded-full text-xs text-center inline-flex items-center justify-center">
                    <i class="material-icons text-sm text-center">alarm</i>
                    {{ recipe.duration }}mins
                </span>
            </div>
            <h1 class="text-gray-800 text-2xl text-center font-bold">{{ recipe.title }}</h1>
            <span class="text-gray-700 text-start w-full font-bold inline-flex items-center">Ingredients:
                <p class="md:text-start md:ml-2 md:w-full md:font-normal md:inline-block hidden">
                    {{
                            recipe.ingredients
                    }}</p>
            </span>
            <p class="text-start ml-2 mb-2 w-full font-normal md:hidden">
                {{
                        recipe.ingredients
                }}</p>

            <span class="inline-flex font-semibold text-gray-700 w-full border-b-2 py-2">Possible allergens: <p
                    class="text-orange-400 ml-1 font-normal"> {{
                            recipe.allergen
                    }}</p>
                <p class="text-orange-400 ml-1 font-normal" v-if="recipe.allergen.length < 1"> None specified</p>
            </span>

            <p class="w-full py-2">{{ recipe.process }}</p>


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