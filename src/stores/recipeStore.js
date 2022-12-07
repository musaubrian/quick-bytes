//handles the recipe's states
import { decode } from "base64-arraybuffer";
import { defineStore } from "pinia";
import router from "../router";
import { supabase } from "../supabase";

export const useRecipeStore = defineStore("recipes", {
  state: () => ({
    recipes: "",
    title: "",
    ingredients: "",
    allergens: "",
    duration: 1,
    process: "",
    singleRecipe: "",
    fetchingRecipes: false,
    fetchError: false,
    uploadError: false,
    uploading: false,
    imglink: "",
    baseString: "",
    fileStuff: "",
    fromSupabase: true,
  }),
  getters: {
    async getRecipes() {
      //fetch the recipes from supabase
      this.fetchingRecipes = true;
      const { data, error } = await supabase.from("qb-recipes").select();

      if (data) {
        this.recipes = data;
      } else if (error) {
        this.fetchError = true;
      }
      this.fetchingRecipes = false;
    },
  },
  actions: {
    async uploadImage(str) {
      /*
      does the the actual uploading to supabase
      Args::
        str: the base64 encoded string
      */
      const { data, error } = await supabase.storage
        .from("recipes")
        .upload("images/" + this.fileStuff.name, decode(str), {
          upsert: true,
          contentType: "images/*",
        });
      const imgData = data;
      const supaUrl =
        import.meta.env.VITE_SUPABASE_URL +
        "/storage/v1/object/public/recipes/";
      this.imglink = supaUrl + imgData.path;
      console.log("url:", this.imglink);
      if (error) {
        alert("error encoutered", error);
      }
    },
    async addRecipes() {
      this.uploading = true;
      const { err } = await supabase.from("qb-recipes").insert({
        title: this.title,
        ingredients: this.ingredients,
        allergen: this.allergens,
        process: this.process,
        duration: this.duration,
        imgLink: this.imglink,
      });
      if (err) {
        this.uploadError = true;
      }
      this.uploading = false;
      router.push("/");
    },
    async getSingleRecipe(id) {
      /*
      gets a single recipe's content using it's id from
        the supabase database
      Args::
        id: the recipes id
      */
      this.singleRecipe = "";
      this.fetchingRecipes = true;
      const { data, error } = await supabase
        .from("qb-recipes")
        .select()
        .eq("id", id);
      if (error) {
        this.fetchError = true;
      } else if (data) {
        this.singleRecipe = data;
      }
      this.fetchingRecipes = false;
    },
    routeToId(id) {
      //redirects to the single recipes page using the id
      this.fromSupabase = true;
      router.push("/recipe/" + id);
      this.getSingleRecipe(id);
    },
  },
});
