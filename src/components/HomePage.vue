<template>
    <div class="hero  w-full bg-clip-text">
        <img src="../assets/noodles.jpg" alt="noodles" class="w-full h-full object-cover">
    </div>
    <div class="font-bold p-4 relative flex flex-col items-center justify-center landing">
        <h1 class="text-5xl text-gray-200 text-center mt-5">QuickBytes</h1>
        <p class="md:text-2xl text-xl text-gray-200 font-normal my-5 text-center md:w-8/12">Every time you use the word
            ‘healthy,’ you lose. The key is to make yummy, delicious food that happens to be healthy.
        </p>

        <div class="inline-flex w-8/12 text-gray-100 md:w-6/12 justify-center  my-3 font-semibold">
            <span @click="signup()"
                class="px-4 py-2 text-lg mr-2 border-2 rounded-lg inline-flex justify-center items-center border-orange-400 cursor-pointer active:bg-orange-400 transition-all">
                SignUp</span>
            <RouterLink to="/auth"
                class="px-5 py-3 text-lg ml-2 bg-orange-400 inline-flex justify-center items-center rounded-lg active:bg-orange-600 transition-all">
                LogIn</RouterLink>
        </div>
    </div>
</template>
<script setup>
import router from '../router';
import { useAuthStore } from '../stores/authStore';


const authStore = useAuthStore();
const signup = () => {
    authStore.routeToRegister()
    router.push('/auth')
}
</script>

<style>
.hero {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 1;
    left: 0;
    filter: brightness(0.5);
}

.landing {
    height: 90vh
}
</style>