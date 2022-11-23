<template>
    <div class="hero  w-full bg-clip-text">
        <img src="../assets/steak.jpg" alt="noodles" class="w-full h-full object-cover">
    </div>
    <form @submit.prevent="lonePageSearch()" class="w-full flex flex-col  justify-center items-center relative">
        <input type="search" id="search" required ref="autoFocus"
            class="p-3 rounded-lg w-10/12 md:w-5/12 outline-none focus:ring-2 focus:border-transparent text-lg transition-all bg-gray-50"
            placeholder="Let's find your meal" v-model="searchString" />
        <button type="submit"
            class="inline-flex items-center justify-center bg-blue-400 p-3 rounded-lg mt-2 capitalize text-gray-100 md:w-1/6 active:bg-blue-600 font-semibold transition-all">search</button>
    </form>
</template>

<script>
import { useSearchStore } from '../stores/searchStore'
import { useAuthStore } from '../stores/authStore';
import router from '../router';
import { nextTick, onMounted, ref } from 'vue';
export default {
    data() {
        return {
            searchString: ''
        }
    },
    methods: {
        lonePageSearch() {
            const searchStore = useSearchStore();
            searchStore.searchWord = this.searchString
            router.push('/search/recipes')
        }
    },
    setup() {
        const searchStore = useSearchStore();
        const authStore = useAuthStore();
        const autoFocus = ref(null)
        if (authStore.isLoggedIn === false) {
            router.push('/home')
        }
        onMounted(() => {
            nextTick(() => {
                autoFocus.value.focus();
            });
        });

        return {
            authStore,
            searchStore,
            autoFocus
        }

    }
}
</script>

<style>
form {
    height: 100vh;
}

.hero {
    filter: brightness(0.7);
}
</style>