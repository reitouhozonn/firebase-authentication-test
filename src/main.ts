import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import authStore, { authStoreKey } from './stores/auth'


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6fk3qSBe9GkvmgN-F8GAuH1pe9lcj0B4",
    authDomain: "codememo-2d69e.firebaseapp.com",
    projectId: "codememo-2d69e",
    storageBucket: "codememo-2d69e.appspot.com",
    messagingSenderId: "5454883495",
    appId: "1:5454883495:web:f28f64d25533e11b690982",
    measurementId: "G-2VVWX1BR55"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

createApp(App)
    .use(router)
    .provide(authStoreKey, authStore())
    .mount('#app')
