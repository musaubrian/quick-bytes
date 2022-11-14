import { defineStore } from "pinia";
import router from "../router";
import { supabase } from "../supabase";

export const useRecipeStore = defineStore('recipes', {
    state: ()=>({
        recipes: '',
        singleRecipe: '',
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
            }
            this.fetchingRecipes = false
        },
        async fetchSingleRecipe(id){
            const {data, error} = await supabase.from('qb-recipes').select().eq('id', id)
            if(error){
                this.fetchError = true
            } else if(data){
                this.singleRecipe = data
            }
        },
    },
    actions: {
        async addRecipes(recipeTitle, recipeIngredients, allergens, proceedure, preparationTime, desc){
            this.uploading = true
            const {err} = await supabase.from('qb-recipes').insert({
                title: recipeTitle,
                ingredients: recipeIngredients,
                allergen: allergens,
                process: proceedure ,
                duration: preparationTime,
                shortDesc: desc
            })
            if(err){
                this.uploadError = true
            }
            this.uploading = false
            router.push('/')
        },
        async getSingleRecipe(id){
            const {data, error} = await supabase.from('qb-recipes').select().eq('id', id)
            if(error){
                this.fetchError = true
            } else if(data){
                this.singleRecipe = data
            }
        },
        routeToId(id){
            router.push('/' + id)
            this.getSingleRecipe(id)
        }
    }
})