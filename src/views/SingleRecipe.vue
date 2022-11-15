<template>
    <div v-for="recipe in recipeStore.singleRecipe">
        <img :src="recipe.imgLink" alt="recipe image" v-if="recipe.imgLink != ''" class="h-40 w-full object-cover
            object-center m-auto shadow-md">
        <img src="../assets/notfound.png" alt="no image available" v-else="recipe.imgLink === null"
            class="h-40 w-full object-cover object-center m-auto shadow-md">

        <h1 class=" text-gray-700 text-2xl capitalize md:text-3xl mt-1 text-center font-bold">{{
                recipe.title
        }}</h1>
        <div class="w-full px-2 md:text-lg md:inline-flex justify-center items-center">
            <span class="text-gray-700 text-start md:w-6/12 font-bold inline-flex items-center">Ingredients:
                <p class="md:text-start md:ml-2 md:w-full md:font-normal md:inline-block hidden">
                    {{
                            recipe.ingredients
                    }}</p>
            </span>
        </div>
        <p class="text-start px-2 mb-2 w-full font-normal md:hidden">
            {{
                    recipe.ingredients
            }}</p>

        <div class="inline-flex px-2 font-semibold text-gray-700 w-full items-center justify-center border-b-2 py-2">
            <span class="md:w-5/12 w-full">Possible
                Allergens:</span>
            <p class="text-orange-400 ml-1 font-normal w-full md:w-7/12" v-if="recipe.allergen != ''"> {{
                    recipe.allergen
            }}</p>
            <p class="text-orange-400 ml-1 font-normal" v-if="recipe.allergen === ''"> None specified</p>
        </div>
        <span class="px-2 text-gray-700 font-semibold text-md ">proceedure:</span>
        <p class="px-2 text-md">{{ recipe.process }}</p>
    </div>
    <div class="w-full inline-flex justify-center items-center text-blue-500 font-semibold cursor-pointer">
        <RouterLink to="/" class="relative inline-flex justify-center items-center hover:transition-all"
            v-if="recipeStore.fetchingRecipes === false">
            <i class="material-icons text-sm font-bold">arrow_back</i>
            Back home
        </RouterLink>
    </div>
    <div class="flex flex-col justify-center items-center mt-3" v-if="recipeStore.fetchingRecipes === true">
        <h1 class="text-lg text-gray-600 font-bold">Fetching your recipes...</h1>
    </div>
    <div class="flex flex-col justify-center items-center mt-3" v-if="recipeStore.fetchError === true">
        <h1 class="text-red-500 font-bold text-xl">Couldn't fetch recipes</h1>
        <p class="text-red-400 text-lg">Check your connection</p>
    </div>
    <div class="w-full fixed bottom-1 mb-4 mt-2 right-0 mr-1 md:hidden inline-flex items-end justify-end">
        <span @click="forceReload($route.params.id)"
            class="p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center justify-center mr-4 active:bg-orange-600 transition duration-700 ease-in-out">
            <i class="material-icons text-gray-200 text-center">sync</i>
        </span>
    </div>
</template>
<script>
import { useRecipeStore } from '../stores/recipeStore';

export default {
    methods: {
        forceReload(id) {
            const recipeStore = useRecipeStore();
            recipeStore.routeToId(id)
        }
    },
    setup() {
        const recipeStore = useRecipeStore();
        return {
            recipeStore
        }
    }
}

</script>