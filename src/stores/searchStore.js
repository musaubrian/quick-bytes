import { defineStore } from "pinia";

export const useSearchStore = defineStore('search', {
    state: ()=>({
        searchWord: 'meatloaf',
        data: '',
        searchResults: ''
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
    }
})