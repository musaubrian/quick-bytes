//handles the search featurestates
import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import router from "../router";
import { useRecipeStore } from "./recipeStore";

export const useSearchStore = defineStore("search", {
  state: () => ({
    searchWord: useLocalStorage("searchWord", ""),
    searchBoxStatus: false,
    data: "",
    searchResults: "",
    singleSearchResult: "",
  }),
  getters: {
    async searchForRecipe() {
      /*
      Sends a request to theopenDb API to get recipes matching
        the searchword(keyword) entered
      */
      const recipeStore = useRecipeStore();
      recipeStore.fetchingRecipes = true;
      this.searchBoxStatus = false;
      let url = `https://themealdb.com/api/json/v1/1/search.php?s=${this.searchWord}`;
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => (this.searchResults = result.meals));
      recipeStore.fetchingRecipes = false;
    },
  },
  actions: {
    async fetchSingleRecipe(id) {
      //fetches a single recipe from theOpenDb API using the recipes id
      this.searchBoxStatus = false;
      const recipeStore = useRecipeStore();
      recipeStore.fetchingRecipes = true;
      let url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      let options = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(url, options)
        .then((response) => response.json())
        .then((result) => (this.singleSearchResult = result.meals));
      recipeStore.fetchingRecipes = false;
    },
    routeToSearchedId(id) {
      //routes to the single recipe's page using its ID
      const recipeStore = useRecipeStore();
      recipeStore.fromSupabase = false;
      router.replace("/recipe/" + id);
      this.fetchSingleRecipe(id);
    },
  },
});
