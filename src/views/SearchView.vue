<template>
    <form @submit.prevent="" class="w-full flex flex-col  justify-center items-center">
        <input type="search" id="search"
            class="border-2 border-blue-500 p-2 rounded-lg w-10/12 md:w-5/12 focus:ring-5 focus:ring-blue-500 focus:outline-none f"
            placeholder="Let's find your meal" />
        <button type="submit"
            class="inline-flex items-center justify-center bg-blue-400 p-3 rounded-lg mt-1 capitalize text-gray-100 md:w-1/6">search</button>
    </form>
</template>

<script>
import { useSearchStore } from '../stores/searchStore'
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        getFocus() {
            const searchStore = useSearchStore;
            searchStore.focusInput
        }
    },
    setup() {
        const searchStore = useSearchStore;

        return {
            searchStore
        }

    }
}
</script>

<style>
form {
    height: 100vh;
}
</style>