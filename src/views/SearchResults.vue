<template>
    <LoggedInNav />
    <div class="grid grid-cols-4 gap-4 w-auto mt-4 px-5 md:px-10 mb-20">
        <div class="col-span-4 md:col-span-2 border-2 border-gray-300 rounded-lg flex flex-col px-4 py-2 items-center justify-around capitalize shadow-md"
            v-for="recipe in searchStore.searchResults" :key="recipe.idMeal">
            <div class="inline-flex w-full justify-end py-2">
                <div class="w-full object-cover">
                    <img :src="recipe.strMealThumb" alt="recipe image" v-if="recipe.imgLink != ''"
                        class="w-full h-20 rounded-full pr-1 object-cover object-center hover:brightness-75">
                </div>
            </div>
            <h1 class="text-gray-800 text-2xl text-center font-bold">{{ recipe.strMeal }}</h1>

            <span>watch on <a class="text-red-400 font-semibold" :href="recipe.strYoutube">youtube</a></span>
            <span @click="searchStore.routeToSearchedId(recipe.idMeal)"
                class="text-gray-700 underline my-3 cursor-pointer">Show full recipe</span>
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
import FloatingButton from '../components/FloatingButton.vue';
import LoggedInNav from '../components/LoggedInNav.vue';

const searchStore = useSearchStore();
const authStore = useAuthStore();
searchStore.searchForRecipe
if (authStore.isLoggedIn === false) {
    router.push('/home')
}
</script>