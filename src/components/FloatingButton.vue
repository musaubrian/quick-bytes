<template>
    <div class="w-full fixed bottom-0 mb-20 right-0 md:hidden inline-flex items-end flex-col justify-end transition duration-1000 ease-in-out"
        v-if="toggled">
        <span @click="toggleSearch()"
            class="material-icons text-gray-200 p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center mr-4 active:bg-orange-600 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

        </span>
        <RouterLink to="/add"
            class="material-icons text-gray-200 p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center mr-4 active:bg-orange-600 mb-3">
            edit</RouterLink>
    </div>
    <div class="w-full fixed bottom-1 mb-4 mt-2 right-0 md:hidden inline-flex items-end justify-end">
        <span @click="toggled = !toggled" v-if="!toggled"
            class="p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center justify-center mr-4 active:bg-orange-600 transition duration-700 ease-in-out">
            <i class="material-icons text-gray-800">keyboard_arrow_up</i>
        </span>
        <span @click="toggled = !toggled"
            class="p-4 bg-orange-500 opacity-90 rounded-full cursor-pointer inline-flex items-center justify-center mr-4 active:bg-orange-600 transition duration-700 ease-in-out"
            v-if="toggled">
            <i class="material-icons text-gray-800">keyboard_arrow_down</i>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSearchStore } from '../stores/searchStore';
const toggled = ref(false)
const searchStore = useSearchStore();
const toggleSearch = () => {
    searchStore.searchBoxStatus = true
}

</script>
