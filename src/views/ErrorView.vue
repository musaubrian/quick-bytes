<template>
    <div class="err w-full flex flex-col items-center justify-center my-2 " style="height: 90vh;">
        <h1 class="text-3xl text-gray-800 font-semibold">Looks like you're lost</h1>
        <RouterLink to="/"
            class="bg-blue-400 p-4 rounded-md text-xl my-3 text-gray-50 font-bold active:bg-blue-600 transition-all">
            Take me home
        </RouterLink>
    </div>
</template>

<script setup>

</script>

<style scoped>
.err {
    background-image: url('../assets/404.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>