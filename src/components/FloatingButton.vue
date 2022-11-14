<template>
    <div class="w-full fixed bottom-1 mb-5 right-0 md:hidden inline-flex items-end justify-end">
        <span class="p-3 bg-orange-500 rounded-full cursor-pointer inline-flex items-center mr-3" @click="reload()">
            <i class="material-icons text-gray-800">sync</i></span>
    </div>
</template>

<script setup>

const reload = () => {
    window.location.reload()
}

</script>
