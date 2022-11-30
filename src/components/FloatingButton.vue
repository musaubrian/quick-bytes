<template>
    <div class="w-full fixed bottom-0 mb-24 right-0 md:hidden inline-flex items-end flex-col justify-end transition duration-1000 ease-in-out"
        v-if="toggled">
        <RouterLink to="/search"
            class="material-icons text-gray-200 p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center mr-4 active:bg-orange-600 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

        </RouterLink>
        <RouterLink to="/add"
            class="material-icons text-gray-200 p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center mr-4 active:bg-orange-600 mb-3">
            edit</RouterLink>
        <span @click="reload"
            class="material-icons text-gray-100 p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center mr-4 active:bg-orange-600">sync</span>
    </div>
    <div class="w-full fixed bottom-1 mb-4 mt-2 right-0 md:hidden inline-flex items-end justify-end">
        <span @click="toggled = !toggled" v-if="!toggled"
            class="p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center justify-center mr-4 active:bg-orange-600 transition duration-700 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
        </span>
        <span @click="toggled = !toggled"
            class="p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center justify-center mr-4 active:bg-orange-600 transition duration-700 ease-in-out"
            v-if="toggled">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
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
