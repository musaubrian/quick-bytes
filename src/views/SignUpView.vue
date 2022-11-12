<template>
    <div class="flex justify-center items-center mt-10 mb-2">
        <form @submit.prevent="signup()" class="flex flex-col flex-nowrap justify-center items-center h-96">
            <h1 class="text-4xl font-bold">QuickBytes</h1>
            <h2 class="text-gray-600 text-xl">SignIn</h2>
            <p class="text-gray-800">Tasty treats quickly</p>
            <label for="email" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Email:</label>
            <input type="email" placeholder="random@gmail.com" v-model="userEmail" required
                class="w-full border-2 mt-1 p-3 rounded-2xl border-gray-400 md:w-8/12">
            <label for="" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Password:</label>
            <input type="password" name="password" placeholder="************" v-model="userPassword" required
                class="w-full border-2 mt-1 p-3 rounded-2xl border-gray-400 md:w-8/12">
            <span class="mt-2 mb-2">Already have an account? <RouterLink to="/signin" class="text-blue-700">Sign in
                </RouterLink>
            </span>
            <button type="submit" class="bg-orange-500 p-3 rounded-xl text-white font-medium w-4/12">Sign In</button>
        </form>
    </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore';

export default {
    data() {
        return {
            userEmail: '',
            userPassword: ''
        }
    },
    methods: {
        signup() {
            const authStore = useAuthStore();
            authStore.signUp(this.userEmail, this.userPassword)
        }
    }
}
</script>
<style>
form {
    width: 85%;
}
</style>