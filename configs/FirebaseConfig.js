// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmKPDQHoFMhJPlznENnV6gZXjylYIQPUs",
  authDomain: "mta-11e44.firebaseapp.com",
  projectId: "mta-11e44",
  storageBucket: "mta-11e44.firebasestorage.app",
  messagingSenderId: "237709546440",
  appId: "1:237709546440:web:2c11083e1844d4182e26fd",
  measurementId: "G-MV002WZEGS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);