import { defineStore } from "pinia"
import {createUserWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from "../firebase"
import router from '../router'

export const useAuthStore = defineStore("fireAuth", {
    state: () => ({
        user: '',
        isLoggedIn: false,
        signUpError: false
    }),
    actions: {
        async signUp(email, password) {
            console.log("signed up")
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    this.user = userCredentials.user
                })
                .catch((error) => {
                    this.signUpError = true
                })
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