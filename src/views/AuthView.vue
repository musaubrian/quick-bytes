<template>
    <div class="flex justify-center items-center" style="height: 100vh;">
        <SignIn v-if="authStore.login === true" />
        <SignUp v-if="authStore.register === true" />
    </div>
</template>

<script setup>
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue';
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore()


</script>