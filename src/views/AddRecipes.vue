<template>
    <form @submit.prevent="uploadRecipes()" class="w-full h-full flex flex-col items-center justify-center">
        <label for="recipe-title" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Recipe Title:</label>
        <input type="text" name="recipe-title" id="" class="w-10/12 border-2 md:w-6/12 p-2 rounded-md"
            placeholder="mango slushie" v-model="recipeTitle" required>
        <label for="recipe-ingredients" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Ingredients:</label>
        <input type="text" name="recipe-ingredients" id="" class="w-10/12 border-2 md:w-6/12 p-2 rounded-md"
            placeholder="mangoes, milk, sugar" v-model="ingredients" required>
        <label for="allergens" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Allergens:</label>
        <input type="text" name="allergens" id="" class="w-10/12 border-2 md:w-6/12 p-2 rounded-md" placeholder="milk"
            v-model="allergens">
        <label for="duration" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Duration(minutes):</label>
        <input type="number" name="duration" class="w-10/12 border-2 md:w-6/12 p-2 rounded-md mb-2" v-model="timeTaken"
            required>
        <textarea rows="5" class="border-2 border-gray-300 rounded-md mt-2 w-10/12 md:w-6/12 p-3" v-model="proceedure"
            placeholder="peel the mangoes,\n Dice 'em real good" required></textarea>
        <button type="submit" class="bg-orange-500 p-3 rounded-lg mt-2">
            <span v-if="recipeStore.uploading === false">Upload Recipe</span>
            <span v-if="recipeStore.uploading == true">Uploading...</span>
        </button>

    </form>
    <div class="fixed top-0 left-0 mt-1 flex flex-col items-center justify-center w-full bg-gray-50 h-auto"
        v-if="recipeStore.uploadError === true">
        <h1 class="text-red-600 text-xl font-bold">Could not upload your recipe</h1>
        <p class="text-gray-600">Please check your internet connection</p>
    </div>
</template>

<script>
import { useRecipeStore } from '../stores/recipeStore';

export default {
    data() {
        return {
            recipeTitle: '',
            ingredients: '',
            allergens: '',
            timeTaken: 10,
            proceedure: ''
        }
    },
    methods: {
        uploadRecipes() {
            const recipeStore = useRecipeStore();
            recipeStore.addRecipes(this.recipeTitle, this.ingredients, this.allergens, this.proceedure, this.timeTaken)
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