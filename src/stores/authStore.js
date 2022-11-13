import { defineStore } from "pinia"
import {supabase} from '../supabase'
import router from '../router'

export const useAuthStore = defineStore("fireAuth", {
    state: () => ({
        isLoggedIn: false,
        signUpError: false,
        signUpSuccess: false,
        signInError: false
    }),
    actions: {
        async signUp(email, password) {
            const {data, error} = await supabase.auth.signUp({
                email: email,
                password: password
            })
            if (data){
                this.signUpSuccess = true
            }
            if(error){
                this.signUpError = true
                console.log(this.signUpError)
            }
            console.log(this.user)
        },
        async signIn(email, password) {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            if (error){
                this.signInError = true
                router.push('/signin')
            } else if(data) {
                this.isLoggedIn = true
                router.push('/home')
            }
        },
        async logOut(){
            const {error} = await supabase.auth.signOut()
            router.push('/')
        }
    }
})