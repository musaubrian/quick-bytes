import { defineStore } from "pinia";

export const useSearchStore = defineStore('search', {
    state: ()=>({
        searchWord: ''
    }),
    actions: {
        focusInput(id){
            document.getElementById(id).focus()
        }
    }
})