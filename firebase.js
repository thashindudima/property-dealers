import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";


import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyB6hRNsxI-qSuA7VE2O24sUYIJp0e550wg",

    authDomain:
        "property-dealers-2007.firebaseapp.com",

    projectId:
        "property-dealers-2007",

    storageBucket:
        "property-dealers-2007.firebasestorage.app",

    messagingSenderId:
        "312433239583",

    appId:
        "1:312433239583:web:4dbd6f27ea9bb890a5d72a"

};


const app =
    initializeApp(firebaseConfig);


const auth =
    getAuth(app);


const db =
    getFirestore(app);


const googleProvider =
    new GoogleAuthProvider();


export {
    app,
    auth,
    db,
    googleProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
};