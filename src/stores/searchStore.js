import { defineStore } from "pinia";

export const useSearchStore = defineStore('search', {
    state: ()=>({
        searchWord: 'fish',
        data: '',
        searchResults: ''
    }),
    getters: {
        getRecipe(responseArray){
            this.searchResults = responseArray
            console.log(this.searchResults)
        },
        searchForRecipe(){
            var url = `https://themealdb.com/api/json/v1/1/search.php?s=${this.searchWord}`
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              if (this.searchWord === '') {
                alert('empty search word')
              } else {              
                fetch(url, requestOptions)
                    .then((response) => response.json())
                    .then(result => console.log(result.meals));
                console.log(url)
              }
        }
    }
})