import { defineStore } from "pinia"
import {supabase} from '../supabase'
import router from '../router'
import { useLocalStorage } from "@vueuse/core"

export const useAuthStore = defineStore("fireAuth", {
    state: () => ({
        isLoggedIn: useLocalStorage('isLoggedIn', false),
        signUpError: false,
        signUpSuccess: false,
        signInError: false,
        signOutError: false,
        login: true,
        register: false
    }),
    actions: {
        routeToLogin(){
            router.push('/auth')
            this.register = false
            this.login = true
        },
        routeToRegister(){
            this.login = false
            this.register = true;
        },
        async signUp(email, password) {
            const {data, error} = await supabase.auth.signUp({
                email: email,
                password: password
            })
            if (data){
                this.signUpError = false
                this.signUpSuccess = true
            }
            if(error){
                this.signUpSuccess = false
                this.signUpError = true
                this.login = false
                this.register = true
                router.push('/auth')
            }
        },
        async signIn(email, password) {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            if (error){
                this.signInError = true
                router.push('/auth')
            } else if(data) {
                this.signInError = false
                this.isLoggedIn = true
                router.push('/')
            }
        },
        async logOut(){
            const {error} = await supabase.auth.signOut()
            router.push('/home')
            if(error) {
                this.signOutError = true
            } this.isLoggedIn = false
        }
    }
})