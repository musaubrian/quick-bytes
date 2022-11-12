import { defineStore } from "pinia"
import {getAuth, GoogleAuthProvider, signInAnonymously, signInWithPopup, signInWithRedirect} from "firebase/auth"
import { firebaseApp } from "../firebase"

export const useAuthStore = defineStore("fireAuth", {
    state: () => ({
        user: '',
        isLoggedIn: false,
        signUpError: false
    }),
    actions: {
        async signIn() {
            console.log("sign in clicked")
            this.isLoggedIn = true
        }
    }
})