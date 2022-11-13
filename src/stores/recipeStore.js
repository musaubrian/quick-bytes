import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useRecipeStore = defineStore('recipes', {
    state: ()=>({
        recipes: '',
        fetchingRecipes: false,
        fetchError: false,
        uploadError: false
    }),
    getters: {
        async getRecipes(){
            this.fetchingRecipes = true
            const {data, error} = await supabase.from('qb-recipes').select()

            if(data){
                this.recipes = data
                console.log(this.recipes)
            } else if(error){
                this.fetchError = true
            }
            this.fetchingRecipes = false
        }
    }

})