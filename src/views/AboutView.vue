<template>
    <div class="landing flex justify-center items-center flex-col mb-2">
        <h1 class="text-5xl md:text-6xl text-gray-200 font-bold text-center">QuickBytes</h1>
        <p class="md:text-2xl text-lg text-gray-300 font-normal my-5 text-center md:w-8/12">Every time you use the
            word
            ‘healthy,’ you lose. The key is to make yummy, delicious food that happens to be healthy.
        </p>
    </div>
    <div class="flex flex-col w-full p-2">
        <!-- <h1 class="text-2xl text-gray-700 text-center font-semi-bold">Features</h1> -->
        <div class="flex w-full flex-col md:flex-row my-3">
            <div
                class="w-full md:w-5/6 inline-flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden md:mr-2">
                <img src="../assets/eating_together.svg" class="w-4/6 object-cover hover:scale-110 transition-all "
                    alt="">
            </div>
            <div class="w-full md:w-5/6 flex flex-col items-center justify-center p-2 md:ml-2">
                <h1 class="text-2xl text-center font-semibold text-gray-800">Community Inspired recipes</h1>
                <p class="text-justify text-gray-700 text-lg">
                    The members can find recipes created by other people easily
                </p>
                <p class="text-justify text-gray-700 text-lg">
                    -
                </p>

            </div>
        </div>
        <div class="flex w-full flex-col md:flex-row my-3">
            <div
                class="w-full md:hidden md:w-5/6 inline-flex items-center justify-center border-2 border-gray-300 rounded-lg overflow-hidden md:ml-2">
                <img src="../assets/search.svg" class="object-cover hover:scale-110 w-4/6 transition-all "
                    alt="woman holding a magnifying glass">
            </div>
            <div class="w-full md:w-5/6 flex flex-col items-center justify-center p-2 md:mr-2">
                <h1 class="text-2xl text-center font-semibold text-gray-800 mb-2">Search for recipes</h1>
                <p class="text-justify text-gray-700 text-lg">
                    The members can search for recipes from an external database incase they are unable to find what
                    they want
                </p>
                <p class="text-justify text-gray-700 text-lg">
                    -
                </p>
            </div>
            <div
                class="w-full hidden md:w-5/6 md:inline-flex items-center justify-center border-2 border-gray-300 rounded-lg overflow-hidden md:ml-2">
                <img src="../assets/search.svg" class="object-cover hover:scale-110 w-4/6 transition-all "
                    alt="woman holding a magnifying glass">
            </div>
        </div>
        <div class="flex w-full flex-col md:flex-row my-3">
            <div
                class="w-full md:w-5/6 inline-flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden md:mr-2">
                <img src="../assets/barbaque.svg" class="object-cover hover:scale-110 w-4/6 transition-all " alt="">
            </div>
            <div class="w-full md:w-5/6 flex flex-col items-center justify-center p-2 md:ml-2">
                <h1 class="text-2xl text-center font-semibold text-gray-800 mb-2">Add recipes</h1>
                <p class="text-justify text-gray-700 text-lg">
                    The members can contribute to the community by adding more recipes to the database
                </p>
                <p class="text-justify text-gray-700 text-lg">
                    -
                </p>
            </div>

        </div>

    </div>
    <div>
        <h1>About</h1>
    </div>
</template>
<style>
.landing {
    background-image: url("../assets/stirfry.jpeg");
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;
    height: 100vh;
}
</style>