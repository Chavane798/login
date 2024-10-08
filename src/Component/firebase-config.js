// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Suas credenciais do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD7chMvu3VufP0m1tgXFQNPTpBbsymzERo",
    authDomain: "login-34264.firebaseapp.com",
    projectId: "login-34264",
    storageBucket: "login-34264.appspot.com",
    messagingSenderId: "898461369656",
    appId: "1:898461369656:web:129ddfa3a6d9f3cc60edcd",
    measurementId: "G-9WFEWH6E33"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
