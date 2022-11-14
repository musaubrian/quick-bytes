<template>
    <form @submit.prevent="uploadRecipes()" class="w-full h-full flex flex-col items-center justify-center">
        <input type="file" accept="image/*" @change="onUpload(emptyString)"
            class="block w-auto text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
            id="file_input" required />
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
        <label for="process" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Short description:</label>
        <textarea rows="3" class="border-2 border-gray-300 rounded-md mt-2 w-10/12 md:w-6/12 p-3" v-model="shortDesc"
            required placeholder="keep it short and sweet"></textarea>
        <label for="process" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Proceedure:</label>
        <textarea rows="6" name="process" class="border-2 border-gray-300 rounded-md mt-2 w-10/12 md:w-6/12 p-3"
            v-model="proceedure" placeholder="peel the mangoes,\n Dice 'em real good" required></textarea>
        <button type="submit"
            class="bg-orange-500 p-3 rounded-lg mt-2 active:bg-orange-600 hover:shadow-lg transition-all">
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
import { supabase } from '../supabase';
import { decode } from 'base64-arraybuffer'

export default {
    data() {
        return {
            recipeTitle: '',
            ingredients: '',
            allergens: '',
            timeTaken: 10,
            shortDesc: '',
            proceedure: ''
        }
    },
    methods: {
        onUpload(string) {
            const fileSelector = document.getElementById('file_input')
            let files = fileSelector.files[0];
            let reader = new FileReader();
            reader.onload = function () {
                const string = reader.result.replace("data:", "")
                    .replace(/^.+,/, "");
                console.log(string)
            },
                reader.readAsDataURL(files)
        },
        async uploadRecipes(string) {
            const recipeStore = useRecipeStore();
            const fileSelector = document.getElementById('file_input')
            let file = fileSelector.files[0];
            const { data, error } = await supabase.storage.from('recipes')
                .upload('images/' + file.name, decode(string), {
                    upsert: true,
                    contentType: 'image/*'
                })
            if (data) {
                const baseUrl = import.meta.env.VITE_SUPABASE_URL + "/storage/v1/object/public/recipes/" + data.path
                recipeStore.addRecipes(this.recipeTitle, this.ingredients, this.allergens, this.proceedure, this.timeTaken, this.shortDesc, baseUrl)
            } else if (error) {
                console.log(error)
            }

        },

    },
    setup() {
        let emptyString = '';
        const recipeStore = useRecipeStore();
        return {
            recipeStore,
            emptyString
        }

    }
}

</script>