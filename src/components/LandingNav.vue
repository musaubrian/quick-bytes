<template>
    <nav class="static bg-gray-200 inline-flex w-full justify-between px-5 py-3 items-center">
        <div class="logo w-4/12">
            <h1 class="text-2xl font-bold text-end pl-2 md:text-center">QuickBytes</h1>
        </div>
        <div class="options w-5/12">
            <ul class="inline-flex cursor-pointer justify-end w-full">
                <li
                    class="hidden  md:inline-flex md:p-2 md:mr-3 md:border-2 md:rounded-md md:border-orange-400 md:items-center active:bg-orange-400 transition-all">
                    <RouterLink to="/signup">SignUp</RouterLink>
                </li>
                <li
                    class="hidden md:inline-flex md:p-2 md:bg-orange-400 md:rounded-md md:items-center active:bg-orange-600 transition-all">
                    <RouterLink to="/signin">SignIn</RouterLink>
                </li>
                <li class="p-2 inline-flex items-center md:hidden " @click="dropDown = !dropDown">
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
            <li
                class="p-2 mt-3 border-2 rounded-md border-orange-400 inline-flex items-center justify-center w-5/12 active:bg-orange-400 transition-all">
                <RouterLink to="/signup">SignUp</RouterLink>
            </li>
            <li
                class="p-2 mt-3 mb-3 bg-orange-400 rounded-md inline-flex items-center justify-center w-5/12 active:bg-orange-600 transition-all">
                <RouterLink to="/signin">SignIn</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const dropDown = ref(false)

</script>