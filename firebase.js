import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyABDRRPeRUvBvm6NgfuK1ctmLTleDxdyWg",
    authDomain: "campus360-e88ab.firebaseapp.com",
    projectId: "campus360-e88ab",
    storageBucket: "campus360-e88ab.appspot.com",
    messagingSenderId: "868564611977",
    appId: "1:868564611977:web:b559bbe811cd2ca2972758",
    measurementId: "G-KJ91P1JX3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);