<template>
    <div class="flex justify-center items-center mt-20">
        <form @submit.prevent="signIn()" class="flex flex-col flex-nowrap justify-center items-center h-full">
            <h1 class="text-4xl font-bold">QuickBytes</h1>
            <h2 class="text-gray-600 text-xl">SignIn</h2>
            <p class="text-gray-800">Tasty treats quickly</p>
            <label for="email" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Email:</label>
            <input type="email" placeholder="random@gmail.com" v-model="email"
                class="w-full border-2 mt-1 p-3 rounded-xl border-gray-400 md:w-8/12">
            <label for="" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Password:</label>
            <input type="password" name="password" placeholder="supersecretpassword" v-model="password"
                class="w-full border-2 mt-1 p-3 rounded-xl border-gray-400 md:w-8/12">
            <span class="mt-2 mb-2">Don't have an account? <RouterLink to="/signup" class="text-blue-600">Sign up
                </RouterLink>
            </span>
            <button type="submit" class="bg-orange-500 p-3 rounded-xl text-white font-medium w-4/12">Sign In</button>
        </form>
    </div>
    <div class="fixed top-0 left-0 h-10 bg-green-30 p-5 inline-flex w-full items-center justify-center">
        <h1 class="text-orange-500 p-5">Error Signing in</h1>
    </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signIn() {
            const authStore = useAuthStore();
            authStore.signIn(this.email, this.password)
        }
    },
    setup() {
        const authStore = useAuthStore()
    }
}
</script>
<style>
form {
    width: 85%;
}
</style>