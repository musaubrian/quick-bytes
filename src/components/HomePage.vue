<template>
    <div class="hero">
        <LandingNav />

    </div>
</template>
<script setup>
import LandingNav from './LandingNav.vue';
</script>

<style>
.hero {
    background-image: url('../assets/food.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

}
</style>