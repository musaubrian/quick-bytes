<template>
    <form @submit.prevent="" class="w-full h-full flex flex-col items-center justify-center">
        <label for="recipe-title" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Recipe Title:</label>
        <input type="text" name="recipe-title" id="" class="w-10/12 border-2 md:w-6/12 p-2 rounded-md"
            placeholder="mango slushie">
        <label for="recipe-title" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Ingredients:</label>
        <input type="text" name="recipe-title" id="" class="w-10/12 border-2 md:w-6/12 p-2 rounded-md"
            placeholder="mangoes, milk, sugar">
        <label for="recipe-title" class="w-10/12 text-left md:w-6/12 mt-3 text-gray-600">Allergens:</label>
        <input type="text" name="recipe-title" id="" class="w-10/12 border-2 md:w-6/12 p-2 rounded-md"
            placeholder="milk, nuts maybe">
        <div class="flex flex-wrap w-10/12 md:w-6/12 items-center justify-center mt-3">
            <span class="border-2 border-orange-300 rounded-md p-2 mr-2 mt-2">#noodles</span>
            <span class="border-2 border-orange-300 rounded-md p-2 mr-2 mt-2">#potatoes</span>
            <span class="border-2 border-orange-300 rounded-md p-2 mt-2">#smoothies</span>
        </div>
        <textarea rows="5" class="border-2 border-gray-300 rounded-md mt-2 w-10/12 md:w-6/12 p-3"
            placeholder="peel the mangoes,\n Dice 'em real good"></textarea>
        <button type="submit" class="bg-orange-500 p-3 rounded-lg mt-2">Upload goodness</button>

    </form>
</template>

<script setup>

</script>