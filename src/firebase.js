// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAIKzrc0PHzMidceG1P9tlfKgrnwYgMMzQ",
authDomain: "autotours-8bae2.firebaseapp.com",
projectId: "autotours-8bae2",
storageBucket: "autotours-8bae2.firebasestorage.app",
messagingSenderId: "912246551017",
appId: "1:912246551017:web:41f0e25207cf2b4bfc1b78"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)

export const authFirebase= getAuth();
export const dbFirebase= getFirestore();

export default appFirebase;
