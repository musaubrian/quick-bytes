<template>
    <nav class="fixed top-0 left-0 bg-gray-200 inline-flex w-full justify-around items-center p-4">
        <div class="logo">
            <h1 class="text-2xl font-bold">QuickBytes</h1>
        </div>
        <div class="options">
            <ul class="inline-flex cursor-pointer">
                <li class="p-2 mr-3 border-2 rounded-md border-orange-400 inline-flex items-center">
                    <RouterLink to="/signup">Add Recipes</RouterLink>
                </li>
                <li class="p-2 bg-orange-400 rounded-md inline-flex items-center">
                    Sign Out
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
</script>