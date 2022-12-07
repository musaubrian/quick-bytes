<template>
    <form @submit.prevent="uploadRecipes()" class="w-full h-full mb-4 flex flex-col items-center justify-center">
        <label for="recipe-title" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Recipe Image:</label>
        <input type="file" accept="image/*" @change="onUpload()"
            class="block w-10/12 md:w-6/12 text-sm mt-1 rounded-lg border cursor-pointer text-gray-200 focus:outline-none bg-gray-700 border-gray-700 dark:placeholder-gray-100"
            id="file_input" />

        <label for="recipe-title" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Recipe Title:</label>
        <input type="text" name="recipe-title" id="" class="w-10/12 border-2 md:w-6/12 p-2 rounded-lg"
            placeholder="mango slushie" v-model="recipeTitle" required>
        <label for="recipe-ingredients" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Ingredients:</label>
        <input type="text" name="recipe-ingredients" id="" class="w-10/12 border-2 md:w-6/12 p-2 rounded-lg"
            placeholder="mangoes, milk, sugar" v-model="ingredients" required>
        <label for="allergens" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Allergens:</label>
        <input type="text" name="allergens" id="" class="w-10/12 border-2 md:w-6/12 p-2 rounded-lg" placeholder="milk"
            v-model="allergens">
        <label for="duration" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Duration(minutes):</label>
        <input type="number" name="duration" class="w-10/12 border-2 md:w-6/12 p-2 rounded-lg mb-2" v-model="timeTaken"
            required>
        <label for="process" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Proceedure:</label>
        <textarea rows="6" name="process" class="border-2 border-gray-300 rounded-lg mt-2 w-10/12 md:w-6/12 p-3"
            v-model="proceedure" placeholder="peel the mangoes...
(be as detailed as possible)" required></textarea>
        <button type="submit"
            class="bg-orange-500 p-3 rounded-lg mt-3 active:bg-orange-600 hover:shadow-lg transition-all">
            <span v-if="recipeStore.uploading === false">Upload Recipe</span>
            <span v-if="recipeStore.uploading == true">Uploading...</span>
        </button>
        <p>{{ string }}</p>

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
            allergens: 'none',
            timeTaken: 10,
            proceedure: ''
        }
    },
    methods: {
        onUpload() {
            /*
            handles the image upload to supabase storage
            when the file input state changes
            */
            const recipeStore = useRecipeStore();
            const fileSelector = document.getElementById('file_input')
            let files = fileSelector.files[0];
            recipeStore.fileStuff = files;
            let reader = new FileReader();
            reader.onload = function () {
                //encodes the file contents into a base64 string
                const string = reader.result.replace("data:", "")
                    .replace(/^.+,/, "");
                recipeStore.baseString = string
                recipeStore.uploadImage(recipeStore.baseString)
            }
            reader.readAsDataURL(files);
        },
        async uploadRecipes() {
            //handles the recipe upload to the supabase database
            const recipeStore = useRecipeStore();
            recipeStore.title = this.recipeTitle
            recipeStore.ingredients = this.ingredients
            recipeStore.allergens = this.allergens
            recipeStore.duration = this.timeTaken
            recipeStore.process = this.proceedure
            await recipeStore.addRecipes()
        }

    },
    setup() {
        let string = '';
        const recipeStore = useRecipeStore();
        return {
            recipeStore,
            string
        }

    }
}

</script>