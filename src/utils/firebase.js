// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUiorPNUOFRBFCMtRw-__8mAoTWOFPyVo",
  authDomain: "netflixgpt-adc23.firebaseapp.com",
  projectId: "netflixgpt-adc23",
  storageBucket: "netflixgpt-adc23.appspot.com",
  messagingSenderId: "430079049219",
  appId: "1:430079049219:web:3aeb9eae0c3f39818f9836",
  measurementId: "G-PG22YKN9Y7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
