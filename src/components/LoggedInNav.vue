<template>
    <nav class="static bg-gray-200 inline-flex w-full justify-around items-center p-4">
        <div class="logo w-6/12">
            <h1 class="text-2xl font-bold text-end md:text-center">QuickBytes</h1>
        </div>
        <div class="options">
            <ul class="inline-flex cursor-pointer">
                <li
                    class="hidden  md:inline-flex md:p-2 md:mr-3 md:border-2 md:rounded-md md:border-orange-400 md:items-center">
                    <RouterLink to="/add">Add recipes</RouterLink>
                </li>
                <li class="hidden md:inline-flex md:p-2 md:bg-orange-400 md:rounded-md md:items-center">
                    SignOut
                </li>
                <li class="p-2 inline-flex items-center md:hidden" @click="dropDown = !dropDown">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </li>
            </ul>
        </div>
    </nav>
    <div class="bg-gray-200" v-if="dropDown">
        <ul class="flex flex-col items-center cursor-pointer">
            <li class="p-2 mt-3 border-2 rounded-md border-orange-400 inline-flex items-center justify-center w-6/12">
                <RouterLink to="/add">Add recipes</RouterLink>
            </li>
            <li class="p-2 mt-3 mb-3 bg-orange-400 rounded-md inline-flex items-center justify-center w-6/12">
                SignOut
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const dropDown = ref(false)

</script>