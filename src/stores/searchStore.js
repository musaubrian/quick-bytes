import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import router from "../router";

export const useSearchStore = defineStore('search', {
    state: ()=>({
        searchWord: useLocalStorage('searchWord', ''),
        data: '',
        searchResults: '',
        singleSearchResult: ''
    }),
    getters: {
        getRecipe(responseArray){
            this.searchResults = responseArray
            console.log(this.searchResults)
        },
        async searchForRecipe(){
            var url = `https://themealdb.com/api/json/v1/1/search.php?s=${this.searchWord}`
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              await fetch(url, requestOptions)
                    .then((response) => response.json())
                    .then(result => (this.searchResults = result.meals));
                console.log(url)
                console.log('results:',this.searchResults)
        }
    },
    actions: {
        async fetchSingleRecipe(id){
            var url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            var options = {
                method: 'GET',
                redirect: 'follow'
              };
            console.log(url)
            await fetch(url, options)
            .then((response)=> (response.json()))
            .then(result => (this.singleSearchResult = result.meals))
        },
        routeToSearchedId(id){
            router.replace('/search/recipes/'+id)
            this.fetchSingleRecipe(id)
        }

    }
})