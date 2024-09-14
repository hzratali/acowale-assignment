// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNwEGAxgIbTxa8wAy_X1DUIXktE2gNK78",
  authDomain: "acowale-assign-920e4.firebaseapp.com",
  projectId: "acowale-assign-920e4",
  storageBucket: "acowale-assign-920e4.appspot.com",
  messagingSenderId: "1012981596332",
  appId: "1:1012981596332:web:c41c729f704fc0d2691f09",
  measurementId: "G-GZNHF2MLHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
