import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIqJNpGJsGNQy98x5DeFIdu0pOctZaAQE",
    authDomain: "saas-app-landing.firebaseapp.com",
    projectId: "saas-app-landing",
    storageBucket: "saas-app-landing.appspot.com",
    messagingSenderId: "573566270984",
    appId: "1:573566270984:web:3cd28030e0bb14e7409bbd"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions }