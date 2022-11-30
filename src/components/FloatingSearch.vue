<template>
    <div class="fixed top-0 left-0 w-full flex  justify-center items-center transition all" style="height: 100vh;">

        <div class="flex flex-col h-full w-full items-center justify-center p-4">
            <div class="flex flex-col w-full md:w-5/6 rounded-lg shadow-lg items-center justify-center bg-slate-400 overflow-hidden"
                style="height: 60vh;">
                <div class="inline-flex w-full justify-end cursor-pointer">
                    <i class="material-icons py-2 px-3 text-slate-800 font-bold text-2xl"
                        @click="searchStore.searchBoxStatus = false">close</i>
                </div>
                <form @submit.prevent="search()" class="w-full flex flex-col  items-center justify-center">
                    <input type="search" id="search" required ref="autoFocus" class="p-3 rounded-lg w-10/12 md:w-7/12 drop-shadow-xl outline-none text-lg transition-all
                    bg-gray-50" placeholder="Let's find your meal" v-model="searchString" />
                    <button type="submit"
                        class="inline-flex items-center justify-center bg-blue-500 px-5 py-3 rounded-lg mt-3 capitalize text-gray-100 md:w-1/6 active:bg-blue-600 font-semibold transition-all">search</button>

                </form>
            </div>

        </div>
    </div>
</template>

<script>
import { useSearchStore } from '../stores/searchStore'
import router from '../router';
import { nextTick, onMounted, ref } from 'vue';
import { useRecipeStore } from '../stores/recipeStore';
export default {
    data() {
        return {
            searchString: ''
        }
    },
    methods: {
        search() {
            const searchStore = useSearchStore();
            const recipeStore = useRecipeStore();
            searchStore.searchWord = this.searchString
            recipeStore.fromSupabase = false
            router.push('/')
        }
    },
    setup() {
        const searchStore = useSearchStore();
        const autoFocus = ref(null)
        onMounted(() => {
            nextTick(() => {
                autoFocus.value.focus();
            });
        });

        return {

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