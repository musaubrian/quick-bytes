<template>
    <div v-for="recipe in recipeStore.singleRecipe">
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

        <span class="inline-flex font-semibold text-gray-700 w-full items-center border-b-2 py-2">
            <span class="w-5/12">Possible
                Allergens:</span>
            <p class="text-orange-400 ml-1 font-normal w-7/12" v-if="recipe.allergen.length > 1"> {{
                    recipe.allergen
            }}</p>
            <p class="text-orange-400 ml-1 font-normal" v-if="recipe.allergen.length < 1"> None specified</p>
        </span>
        <span>proceedure:</span>
        <p>{{ recipe.process }}</p>
    </div>
    <RouterLink to="/">Home</RouterLink>
    <div class="flex flex-col justify-center items-center mt-3" v-if="recipeStore.fetchingRecipes === true">
        <h1 class="text-lg text-gray-600 font-bold">Fetching deliciousness...</h1>
    </div>
    <div class="flex flex-col justify-center items-center mt-3" v-if="recipeStore.fetchError === true">
        <h1 class="text-red-500 font-bold text-xl">Couldn't fetch recipes</h1>
        <p class="text-red-400 text-lg">Check your connection</p>
    </div>
</template>
<script>
import { useRecipeStore } from '../stores/recipeStore';

export default {
    setup() {
        const recipeStore = useRecipeStore();
        return {
            recipeStore
        }
    }
}

</script>