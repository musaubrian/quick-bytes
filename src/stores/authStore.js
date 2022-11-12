import { defineStore } from "pinia"
import {signOut} from "firebase/auth"
import { auth } from "../firebase"
import router from '../router'

export const useAuthStore = defineStore("fireAuth", {
    state: () => ({
        user: '',
        isLoggedIn: false,
        signUpError: false
    }),
    actions: {
        async signUp() {
            console.log("signed up")
        },
        async signIn() {
            console.log("sign in clicked")
            this.isLoggedIn = true
        },
        logOut(){
            signOut(auth).then(()=> {
                this.isLoggedIn = false
                router.push('/')
            })
        }
    }
})