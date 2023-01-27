// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcP11Fnp8pIyO6VzrDqqjeNAvROJBAcFY",
  authDomain: "testtasks-60781.firebaseapp.com",
  projectId: "testtasks-60781",
  storageBucket: "testtasks-60781.appspot.com",
  messagingSenderId: "354222907014",
  appId: "1:354222907014:web:97baad743702c645217b07",
  measurementId: "G-EPTMYEFZ7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);