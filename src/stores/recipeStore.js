import { defineStore } from "pinia";
import router from "../router";
import { supabase } from "../supabase";

export const useRecipeStore = defineStore('recipes', {
    state: ()=>({
        recipes: '',
        fetchingRecipes: false,
        fetchError: false,
        uploadError: false,
        uploading: false
    }),
    getters: {
        async getRecipes(){
            this.fetchingRecipes = true
            const {data, error} = await supabase.from('qb-recipes').select()

            if(data){
                this.recipes = data                
            } else if(error){
                this.fetchError = true
            } else {
                window.location.reload()
            }
            this.fetchingRecipes = false
        }
    },
    actions: {
        async addRecipes(recipeTitle, recipeIngredients, allergens, proceedure, preparationTime){
            this.uploading = true
            const {err} = await supabase.from('qb-recipes').insert({
                title: recipeTitle,
                ingredients: recipeIngredients,
                allergen: allergens,
                process: proceedure ,
                duration: preparationTime
            })
            if(err){
                this.uploadError = true
            }
            this.uploading = false
            router.push('/home')
        }
    }
})