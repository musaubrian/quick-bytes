// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAZvnSgwoh3aOZJTflANVJQk7jr6n5hTyY",
  authDomain: "quick-bytes-89476.firebaseapp.co",
  projectId: "quick-bytes-89476",
  storageBucket: "quick-bytes-89476.appspot.com",
  messagingSenderId: "782011826028",
  appId: "1:782011826028:web:6967d10727922e77933d49"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);