import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyC6fk3qSBe9GkvmgN-F8GAuH1pe9lcj0B4",
    authDomain: "codememo-2d69e.firebaseapp.com",
    projectId: "codememo-2d69e",
    storageBucket: "codememo-2d69e.appspot.com",
    messagingSenderId: "5454883495",
    appId: "1:5454883495:web:f28f64d25533e11b690982",
    measurementId: "G-2VVWX1BR55"
};

const firebaseInstance = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseInstance);
const db = getFirestore(firebaseInstance);


export default firebaseInstance;
