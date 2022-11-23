import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import router from "../router";

export const useSearchStore = defineStore('search', {
    state: ()=>({
        searchWord: useLocalStorage('searchWord', ''),
        data: '',
        searchResults: '',
        singleSearchResult: '',
        fetching: false
    }),
    getters: {
        async searchForRecipe(){
            var url = `https://themealdb.com/api/json/v1/1/search.php?s=${this.searchWord}`
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              await fetch(url, requestOptions)
                    .then((response) => response.json())
                    .then(result => (this.searchResults = result.meals));
        }
    },
    actions: {
        async fetchSingleRecipe(id){
            this.fetching = true
            var url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            var options = {
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