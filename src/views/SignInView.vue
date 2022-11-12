<template>
    <div class="flex justify-center items-center mt-5">
        <form @submit.prevent="" class="flex flex-col flex-nowrap justify-center items-center h-96">
            <h1 class="text-4xl font-bold">QuickBytes</h1>
            <h2 class="text-gray-600 text-xl">SignIn</h2>
            <p class="text-gray-800">Tasty treats quickly</p>
            <input type="email" placeholder="random@gmail.com" class="inputs">
            <input type="password" placeholder="************" class="inputs">
            <span class="mt-2 mb-2">Don't have an account? <RouterLink to="/signup" class="text-blue-600">Sign up
                </RouterLink>
            </span>
            <button type="submit" class="bg-orange-500 p-3 rounded-xl text-white font-medium">Sign In</button>
        </form>
    </div>
</template>

<script setup>

</script>
<style>
form {
    width: 90%;
}

.inputs {
    @apply w-10/12 border-2 mt-2 p-3 rounded-2xl border-gray-400
}
</style>