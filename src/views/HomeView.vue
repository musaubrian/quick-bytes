<template>
    <div class="fixed top-0 left-0 bg-black py-3 opacity-80 w-full inline-flex items-center justify-end">
        <ul class="inline-flex text-lg text-gray-300 cursor-pointer mr-3 capitalize">
            <li class="px-2">
                <a href="#features">features</a>
            </li>
            <li class="px-2">
                <a href="#inspiration">Inspiration</a>
            </li>
            <li class="px-2">
                <a href="#links" class="transition-all">Links</a>
            </li>
        </ul>
    </div>
    <div class="landing flex justify-center items-center flex-col mb-2 p-2">
        <h1 class="text-5xl md:text-6xl text-gray-50 font-bold text-center">QuickBytes</h1>
        <p class="md:text-2xl text-lg text-gray-100 font-normal my-5 text-center md:w-8/12">Every time you use the
            word
            ‘healthy,’ you lose. The key is to make yummy, delicious food that happens to be healthy.
        </p>
        <RouterLink to="/auth"
            class="bg-orange-500 inline-flex items-center justify-center px-3 py-2 text-gray-100 text-xl font-semibold rounded-lg hover: transition-all active:bg-orange-600">
            <span class="capitalize p-2 hover:mr-2 transition-all">let's go</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="w-6 h-6 hover:ml-2 transition-all">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>

        </RouterLink>
    </div>
    <div class="flex flex-col w-full py-2 px-3 md:px-10" id="features">
        <div class="flex w-full flex-col md:flex-row my-3">
            <div
                class="w-full md:w-5/6 inline-flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden md:mr-2">
                <img src="../assets/eating_together.svg" class="w-4/6 object-cover hover:scale-110 transition-all "
                    alt="two people sitted at a table">
            </div>
            <div class="w-full md:w-5/6 flex flex-col items-center justify-center p-2 md:ml-2">
                <h1 class="text-2xl text-center font-semibold text-gray-800 my-2">Community Inspired recipes</h1>
                <p class="text-justify text-gray-700 text-lg">
                    The members can find recipes created by other people easily
                </p>
                <span class="text-justify text-gray-700 text-lg">
                    -
                </span>

            </div>
        </div>
        <div class="flex w-full flex-col md:flex-row my-3">
            <div
                class="w-full md:hidden md:w-5/6 inline-flex items-center justify-center border-2 border-gray-300 rounded-lg overflow-hidden md:ml-2">
                <img src="../assets/search.svg" class="object-cover hover:scale-110 w-4/6 transition-all "
                    alt="woman holding a magnifying glass">
            </div>
            <div class="w-full md:w-5/6 flex flex-col items-center justify-center p-2 md:mr-2">
                <h1 class="text-2xl text-center font-semibold text-gray-800 my-2">Search for recipes</h1>
                <p class="text-justify text-gray-700 text-lg">
                    The members can search for recipes from an external database incase they are unable to find what
                    they want
                </p>
                <span class="text-justify text-gray-700 text-lg">
                    -
                </span>
            </div>
            <div
                class="w-full hidden md:w-5/6 md:inline-flex items-center justify-center border-2 border-gray-300 rounded-lg overflow-hidden md:ml-2">
                <img src="../assets/search.svg" class="object-cover hover:scale-110 w-4/6 transition-all "
                    alt="man grilling meat">
            </div>
        </div>
        <div class="flex w-full flex-col md:flex-row my-3">
            <div
                class="w-full md:w-5/6 inline-flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden md:mr-2">
                <img src="../assets/barbaque.svg" class="object-cover hover:scale-110 w-4/6 transition-all " alt="">
            </div>
            <div class="w-full md:w-5/6 flex flex-col items-center justify-center p-2 md:ml-2">
                <h1 class="text-2xl text-center font-semibold text-gray-800 my-2">Add recipes</h1>
                <p class="text-justify text-gray-700 text-lg">
                    The members can contribute to the community by adding more recipes to the database
                </p>
                <span class="text-justify text-gray-700 text-lg">
                    -
                </span>
            </div>

        </div>

    </div>
    <div>
        <div class="p-4 bg-gray-100 flex flex-col items-center" id="inspiration">
            <h1 class="text-2xl font-semibold text-gray-800 text-center underline">Inspiration</h1>
            <div class="mt-1 md:text-lg text-gray-800 md:px-10">
                <p class="text-justify">I built this project as there seemed to be a recurring
                    theme around my
                    friends.
                    They couldn't decide on what meal they should prepare And a friend of mine suggested a <em>meal
                        lookup</em> kind of tool</p>
                <p class="text-justify py-2">
                    Now this already exist, but most o them are paid for, riddled with <b>ads</b> or the ingredients
                    used
                    are
                    not readily available.
                    I wanted it to be different by making it free, adding an option to add your
                    own
                    recipes, search for
                    recipes in the projects database and from an external database(an api)
                </p>
                <p class="text-justify py-2">
                    I did some research on social media and coincidentally found that one of my friends was working on a
                    similar *<em>tool</em>
                    Although his tool was on the app you can download
                    (<a href="https://twitter.com/PikaRecipes" target="_blank"
                        class="text-orange-500 font-semibold underline">pika recipes</a>)
                </p>
                <p class="text-justify py-2">
                    Decided use to that as a reference and build a web version of it as a sort of
                    <b>proof of concept</b>
                </p>
            </div>
        </div>
    </div>
    <div class="p-3 bg-gray-200 flex flex-col justify-center items-center" id="links">
        <h1 class="text-gray-900 font-semibold text-2xl underline">Links</h1>
        <ul class="flex flex-col md:flex-row capitalize w-3/6 items-center justify-evenly">

            <li class="text-lg md:p-2 py-1 text-gray-800 hover:opacity-70">
                <a href="https://github.com/musaubrian/quick-bytes" target="_blank">github</a>
            </li>
            <li class="text-lg md:p-2 py-1 text-gray-800 hover:opacity-70">
                <a href="https://twitter.com/_musaubrian" target="_blank">twitter</a>
            </li>
            <li class="text-lg md:p-2 py-1 text-gray-800 hover:opacity-70">
                <a href="https://www.linkedin.com/in/ernest-musau/" target="_blank">linkedin</a>
            </li>

        </ul>
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