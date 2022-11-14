<template>
    <div v-for="recipe in recipeStore.singleRecipe">
        <img :src="recipe.imgLink" alt="recipe image" v-if="recipe.imgLink != null"
            class="md:w-10/12 md:h-60 h-40 w-full object-cover object-center m-auto shadow-md">
        <img src="../assets/notfound.png" alt="no image available" v-else="recipe.imgLink === null"
            class="md:w-10/12 md:h-60 h-40 w-full object-cover object-center m-auto shadow-md">
        <h1 class=" text-gray-800 text-2xl text-center font-bold">{{ recipe.title }}</h1>
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

        <span class="inline-flex font-semibold text-gray-700 w-full items-center border-b-2 py-2">
            <span class="w-5/12">Possible
                Allergens:</span>
            <p class="text-orange-400 ml-1 font-normal w-7/12" v-if="recipe.allergen != ''"> {{
                    recipe.allergen
            }}</p>
            <p class="text-orange-400 ml-1 font-normal" v-if="recipe.allergen === ''"> None specified</p>
        </span>
        <span>proceedure:</span>
        <p>{{ recipe.process }}</p>
    </div>
    <RouterLink to="/" class="text-blue-500 relative" v-if="recipeStore.fetchingRecipes === false">Back home
    </RouterLink>
    <div class="flex flex-col justify-center items-center mt-3" v-if="recipeStore.fetchingRecipes === true">
        <h1 class="text-lg text-gray-600 font-bold">Fetching your recipes...</h1>
    </div>
    <div class="flex flex-col justify-center items-center mt-3" v-if="recipeStore.fetchError === true">
        <h1 class="text-red-500 font-bold text-xl">Couldn't fetch recipes</h1>
        <p class="text-red-400 text-lg">Check your connection</p>
    </div>
    <div class="w-full fixed bottom-1 mb-4 mt-2 right-0 md:hidden inline-flex items-end justify-end">
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