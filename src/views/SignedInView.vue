<template>
  <main>
    <LoggedInNav />
    <RecipesCard />
  </main>
</template>
<script setup>
import LoggedInNav from '../components/LoggedInNav.vue';
import RecipesCard from '../components/RecipesCard.vue';
import router from '../router';
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore()

if (authStore.isLoggedIn === false) {
  router.push('/signin')
}
</script>
