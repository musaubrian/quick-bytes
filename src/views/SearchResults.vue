<template>
    <LoggedInNav />
    <div class="grid grid-cols-4 gap-4 w-auto mt-4 px-5 md:px-10 mb-20">
        <div class="col-span-4 md:col-span-2 border-2 border-gray-300 rounded-lg flex flex-col px-4 py-2 items-center justify-around capitalize shadow-md"
            v-for="recipe in searchStore.searchResults" :key="recipe.mealId">
            <div class="inline-flex w-full justify-end py-2">
                <div class="w-full object-cover">
                    <img :src="recipe.strMealThumb" alt="recipe image" v-if="recipe.imgLink != ''"
                        class="w-full h-20 rounded-full pr-1 object-cover object-center hover:brightness-50">
                </div>
            </div>
            <h1 class="text-gray-800 text-2xl text-center font-bold">{{ recipe.strMeal }}</h1>
            <!-- <span class="text-gray-700 text-start w-full font-bold inline-flex items-center">Ingredients:
            </span> -->
            <!-- <p class="text-start ml-2 mb-2 w-full flex flex-row flex-wrap items-center justify-center font-normal">
                <span class="py-1 px-2 w-3/6">-{{ recipe.strIngredient1 }}</span>
                <span class="py-1 px-2 w-3/6">-{{ recipe.strIngredient2 }}</span>
                <span class="py-1 px-2 w-3/6">-{{ recipe.strIngredient3 }}</span>
                <span class="py-1 px-2 w-3/6">-{{ recipe.strIngredient4 }}</span>
                <span class="py-1 px-2 w-3/6">-{{ recipe.strIngredient5 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient6 != ''">-{{ recipe.strIngredient6 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient7 != ''">-{{ recipe.strIngredient7 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient8 != ''">-{{ recipe.strIngredient8 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient9 != ''">-{{ recipe.strIngredient9 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient10 != ''">-{{ recipe.strIngredient10 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient11 != ''">-{{ recipe.strIngredient11 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient12 != ''">-{{ recipe.strIngredient12 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient13 != ''">-{{ recipe.strIngredient13 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient14 != ''">-{{ recipe.strIngredient14 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient15 != ''">-{{ recipe.strIngredient15 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient16 != ''">-{{ recipe.strIngredient16 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient17 != ''">-{{ recipe.strIngredient17 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient18 != ''">-{{ recipe.strIngredient18 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient19 != ''">-{{ recipe.strIngredient19 }}</span>
                <span class="py-1 px-2 w-3/6" v-if="recipe.strIngredient20 != ''">-{{ recipe.strIngredient20 }}</span>
            </p> -->

            <span>watch on <a class="text-red-400 font-semibold" :href="recipe.strYoutube">youtube</a></span>
            <span @click="recipeStore.routeToId(recipe.mealId)" class="text-gray-700 underline my-3 cursor-pointer">Show
                full
                recipe</span>


        </div>
    </div>
    <FloatingButton />
    <FetchingRecipes />
</template>

<script setup>
import { useSearchStore } from '../stores/searchStore';
import { useAuthStore } from '../stores/authStore';
import router from '../router';
import FetchingRecipes from '../components/FetchingRecipes.vue';
import { useRecipeStore } from '../stores/recipeStore';
import FloatingButton from '../components/FloatingButton.vue';
import LoggedInNav from '../components/LoggedInNav.vue';

const searchStore = useSearchStore();
const authStore = useAuthStore();
const recipeStore = useRecipeStore();
searchStore.searchForRecipe
if (authStore.isLoggedIn === false) {
    router.push('/home')
}
</script>