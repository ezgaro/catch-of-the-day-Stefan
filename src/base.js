import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXVBYuFcJn5eRLuVGynwhTJMy_pNVrJQA",
  authDomain: "catch-of-the-day-valp.firebaseapp.com",
  databaseURL:
    "https://catch-of-the-day-valp-default-rtdb.europe-west1.firebasedatabase.app",
    // projectId: "catch-of-the-day-valp",
    // storageBucket: "catch-of-the-day-valp.appspot.com",
    // messagingSenderId: "764832281053",
    // appId: "1:764832281053:web:69ebf70ac9fa06bfdc8634",
    // measurementId: "G-WKXXT80CVX",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
