<template>
  <main class="bg-gray-50">
    <LoggedInNav />
    <RecipesCard />
    <FloatingButton />
  </main>
</template>
<script setup>
import FloatingButton from '../components/FloatingButton.vue';
import LoggedInNav from '../components/LoggedInNav.vue';
import RecipesCard from '../components/RecipesCard.vue';
import router from '../router';
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();

if (authStore.user < 1 || authStore.isLoggedIn === false) {
  router.push('/home')
}
</script>
