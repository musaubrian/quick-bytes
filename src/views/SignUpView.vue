<template>
    <div class="flex justify-center items-center mt-20">
        <form @submit.prevent="signup()" class="flex flex-col flex-nowrap justify-center items-center h-full">
            <h1 class="text-4xl font-bold">QuickBytes</h1>
            <h2 class="text-gray-600 text-xl">SignUp</h2>
            <p class="text-gray-800">Tasty treats quickly</p>
            <label for="email" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Email:</label>
            <input type="email" placeholder="random@gmail.com" v-model="userEmail" required
                class="w-full border-2 mt-1 p-3 rounded-xl border-gray-400 md:w-8/12">
            <label for="" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Password:</label>
            <input type="password" name="password" placeholder="supersecretpassword" v-model="userPassword" required
                class="w-full border-2 mt-1 p-3 rounded-xl border-gray-400 md:w-8/12">
            <span class="mt-2 mb-2">Already have an account? <RouterLink to="/signin" class="text-blue-700">Sign in
                </RouterLink>
            </span>
            <button type="submit" class="bg-orange-500 p-3 rounded-xl text-white font-medium w-4/12">Sign Up</button>
        </form>
    </div>
    <div class="fixed top-0 left-0 h-auto mt-3 w-full flex justify-center items-center" v-if="authStore.signUpSuccess">
        <h1 class="text-green-400">Check your email</h1>
    </div>
    <div class="fixed top-1 left-0 h-auto mt-3 w-full flex justify-center items-center"
        v-if="authStore.signUpError === true">
        <h1 class="text-red-500">Error encountered when signing up</h1>
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
    },
    setup() {
        const authStore = useAuthStore()
        return {
            authStore
        }
    }
}
</script>
<style>
form {
    width: 85%;
}
</style>