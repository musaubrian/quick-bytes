<template>
    <div v-for="recipe in recipeStore.singleRecipe" :key="recipe.id">
        <img :src="recipe.imgLink" alt="recipe image" v-if="recipe.imgLink != ''" class="h-40 w-full object-cover
            object-center m-auto shadow-md">
        <img src="../assets/notfound.png" alt="no image available" v-else
            class="h-40 w-full object-cover object-center m-auto shadow-md">

        <h1 class="text-gray-800 text-2xl md:text-3xl text-center font-bold py-2 capitalize">{{ recipe.title }}</h1>
        <div class="px-1">
            <span class="text-gray-700 text-start w-full font-bold inline-flex items-center text-lg">Ingredients:</span>
            <p class="text-start px-3 text-md">{{ recipe.ingredients }}</p>
        </div>

        <div class="inline-flex px-1 font-semibold text-gray-700 w-full items-center justify-center border-b-2 py-2">
            <span class="md:w-5/12 w-full text-lg">Possible
                Allergens:</span>
            <p class="text-orange-400 ml-1 font-normal w-full md:w-7/12" v-if="recipe.allergen != ''"> {{
                    recipe.allergen
            }}</p>
            <p class="text-orange-400 ml-1 font-normal" v-if="recipe.allergen === ''"> None specified</p>
        </div>
        <div class="px-1">
            <span class="text-gray-700 text-start w-full font-bold inline-flex items-center text-lg">process:</span>
            <p class="text-justify px-3 text-lg">{{ recipe.process }}</p>
        </div>
    </div>
    <div class="w-full inline-flex my-5 text-lg justify-center items-center text-blue-500 font-semibold cursor-pointer">
        <RouterLink to="/" class="relative inline-flex justify-center items-center hover:transition-all"
            v-if="recipeStore.fetchingRecipes === false">
            <i class="material-icons text-sm font-bold">arrow_back</i>
            Back home
        </RouterLink>
    </div>
    <!-- <div v-for="recipe in searchStore.singleSearchResult" :key="recipe.idMeal">
        <img :src="recipe.strMealThumb" alt="recipe image" v-if="recipe.strMealThumb != ''" class="h-40 w-full object-cover
            object-center m-auto shadow-md">
        <img src="../assets/notfound.png" alt="no image available" v-else
            class="h-40 w-full object-cover object-center m-auto shadow-md">


        <div class="px-2 flex flex-col items-center justify-center">
            <div class="flex flex-row flex-nowrap items-center justify-evenly w-full md:justify-around md:w-3/6 py-3">
                <span class="text-gray-800 px-2">watch on <a class="text-red-400 font-semibold"
                        :href="recipe.strYoutube" target="_blank">youtube</a></span>
                <span class="text-gray-800 px-2">Source: <a :href="recipe.strSource" target="_blank"
                        class="text-orange-400 font-semibold">src</a></span>
            </div>
            <span class="text-gray-700 text-start w-full font-bold inline-flex items-center text-lg px-2">Ingredients:
            </span>
            <p class="text-start ml-2 mb-2 w-full flex flex-row flex-wrap items-center justify-center font-normal">
                <span class="py-1 px-2 w-3/6">-{{ recipe.strIngredient1 }}</span>
                <span class="py-1 px-2 w-3/6">-{{ recipe.strIngredient2 }}</span>
                <span class="py-1 px-2 w-3/6">-{{ recipe.strIngredient3 }}</span>
                <span class="py-1 px-2 w-3/6">-{{ recipe.strIngredient4 }}</span>
                <span class="py-1 px-2 w-3/6">-{{ recipe.strIngredient5 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient6 != ''">-{{ recipe.strIngredient6
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient7 != ''">-{{ recipe.strIngredient7
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient8 != ''">-{{ recipe.strIngredient8
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient9 != ''">-{{ recipe.strIngredient9
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient10 != ''">-{{ recipe.strIngredient10
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient11 != ''">-{{ recipe.strIngredient11
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient12 != ''">-{{ recipe.strIngredient12
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient13 != ''">-{{ recipe.strIngredient13
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient14 != ''">-{{ recipe.strIngredient14
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient15 != ''">-{{ recipe.strIngredient15
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient16 != ''">-{{ recipe.strIngredient16
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient17 != ''">-{{ recipe.strIngredient17
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient18 != ''">-{{ recipe.strIngredient18
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient19 != ''">-{{ recipe.strIngredient19
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient20 != ''">-{{ recipe.strIngredient20
                }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient21 != ''">-{{ recipe.strIngredient21
                }}</span>
            </p>
            <div>
                <span class="text-gray-700 text-start w-full font-bold inline-flex items-center text-lg">process:</span>
                <p class="text-justify px-3 text-lg">{{ recipe.strInstructions }}</p>
            </div>
            <div class="w-full inline-flex justify-center items-center text-blue-500 font-semibold cursor-pointer my-3">
                <RouterLink to="/" class="inline-flex justify-center items-center hover:transition-all">
                    <i class="material-icons text-sm font-bold">arrow_back</i>
                    Back home
                </RouterLink>
            </div>
        </div> -->
    <!-- </div> -->
</template>
<script setup>
import { useRecipeStore } from '../stores/recipeStore';

const recipeStore = useRecipeStore();

</script>