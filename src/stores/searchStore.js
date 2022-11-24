import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import router from "../router";
import { useRecipeStore } from "./recipeStore";

export const useSearchStore = defineStore('search', {
    state: ()=>({
        searchWord: useLocalStorage('searchWord', ''),
        data: '',
        searchResults: '',
        singleSearchResult: ''
    }),
    getters: {
        async searchForRecipe(){
            const recipeStore = useRecipeStore()
            recipeStore.fetchingRecipes = true
            let url = `https://themealdb.com/api/json/v1/1/search.php?s=${this.searchWord}`
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              await fetch(url, requestOptions)
                    .then((response) => response.json())
                    .then(result => (this.searchResults = result.meals));
            recipeStore.fetchingRecipes = false
        }
    },
    actions: {
        async fetchSingleRecipe(id){
            this.fetching = true
            let url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            let options = {
                method: 'GET',
                redirect: 'follow'
              };
            await fetch(url, options)
            .then((response)=> (response.json()))
            .then(result => (this.singleSearchResult = result.meals));
            this.fetching = false
        },
        routeToSearchedId(id){
            router.replace('/search/recipes/'+id)
            this.fetchSingleRecipe(id)
        }

    }
})