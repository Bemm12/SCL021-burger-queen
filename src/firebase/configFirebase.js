// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiRQRTs1T8JfSG1tLwLPzU0GyeDL3re34",
  authDomain: "delicia-express-75e71.firebaseapp.com",
  projectId: "delicia-express-75e71",
  storageBucket: "delicia-express-75e71.appspot.com",
  messagingSenderId: "809650392060",
  appId: "1:809650392060:web:4b444d22dd4600e7f78079",
  measurementId: "G-CB10ZJMYMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };