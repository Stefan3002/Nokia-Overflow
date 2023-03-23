// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbUhgPeIN41OjMBo41kGvZA2vKGM0JxzU",
    authDomain: "nokiaoverflow.firebaseapp.com",
    projectId: "nokiaoverflow",
    storageBucket: "nokiaoverflow.appspot.com",
    messagingSenderId: "378244727586",
    appId: "1:378244727586:web:1791f0debf2cc8e4405b7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const connectWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider())