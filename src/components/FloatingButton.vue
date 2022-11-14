<template>
    <div class="w-full fixed bottom-0 mb-20 right-0 md:hidden inline-flex items-end flex-col justify-end transition duration-1000 ease-in-out"
        v-if="toggled">
        <RouterLink to="/add"
            class="material-icons text-gray-200 p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center mr-4 active:bg-orange-600 mb-3">
            edit</RouterLink>
        <span @click="reload"
            class="material-icons text-gray-100 p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center mr-4 active:bg-orange-600">sync</span>
    </div>
    <div class="w-full fixed bottom-1 mb-4 mt-2 right-0 md:hidden inline-flex items-end justify-end">
        <span @click="toggled = !toggled" v-if="!toggled"
            class="p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center justify-center mr-4 active:bg-orange-600 transition duration-700 ease-in-out">
            <i class="material-icons text-gray-800 text-center">keyboard_arrow_up</i>
        </span>
        <span @click="toggled = !toggled"
            class="p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center justify-center mr-4 active:bg-orange-600 transition duration-700 ease-in-out"
            v-if="toggled">
            <i class="material-icons text-gray-800 text-md"> keyboard_arrow_down</i>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const toggled = ref(false)
const reload = () => {
    window.location.reload()
}

</script>
