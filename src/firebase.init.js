// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzLOKjZkAufpsA1wjdVv3SOdfkmQG-_9A",
    authDomain: "genius-car-services-ebb91.firebaseapp.com",
    projectId: "genius-car-services-ebb91",
    storageBucket: "genius-car-services-ebb91.appspot.com",
    messagingSenderId: "872288138694",
    appId: "1:872288138694:web:3b38017a99206c39d6aec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;