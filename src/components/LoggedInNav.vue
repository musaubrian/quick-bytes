<template>
    <nav class="static bg-gray-200 inline-flex w-full justify-around  items-center p-4">
        <div class="logo w-6/12 inline-flex justify-center px-2">
            <a href="/" class="text-2xl font-bold pl-2 md:text-center">QuickBytes</a>
        </div>

        <div class=" options w-5/12">

            <ul class="inline-flex cursor-pointer justify-end w-full">
                <li class="bg-blue-400 items-center rounded-xl px-3 mr-2 active:bg-blue-600 transition-all text-gray-50
                    hidden md:inline-flex">
                    <RouterLink to="/search">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </RouterLink>

                </li>
                <li
                    class="hidden  md:inline-flex md:p-2 md:mr-3 md:border-2 md:rounded-md md:border-orange-400 md:items-center active:bg-orange-400 transition-all">
                    <RouterLink to="/add">Add Recipe</RouterLink>
                </li>
                <li
                    class="hidden md:inline-flex md:p-2 md:bg-orange-400 md:rounded-md md:items-center active:bg-orange-600 transition-all">
                    <button>SignOut</button>
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
                class="p-2 mt-3 border-2 rounded-lg border-orange-400 inline-flex items-center justify-center w-6/12 active:bg-orange-400 transition-all">
                <RouterLink to="/add">Add recipe</RouterLink>
            </li>
            <li class="p-2 mt-3 mb-3 bg-orange-400 rounded-lg inline-flex items-center justify-center w-6/12 active:bg-orange-600 transition-all"
                @click="storeAuth.logOut">
                SignOut
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import router from '../router';

export default {
    methods: {
        routeToSearch() {
            router.push('/search')
        }

    },
    setup() {
        const dropDown = ref(false);
        const storeAuth = useAuthStore();
        return {
            dropDown,
            storeAuth
        }
    }
}

</script>
