/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgjtes2D2ZS2MuNhvQPfHWFvqIJgzqAZM",
  authDomain: "aurahacks-23ef4.firebaseapp.com",
  projectId: "aurahacks-23ef4",
  storageBucket: "aurahacks-23ef4.appspot.com",
  messagingSenderId: "930464925834",
  appId: "1:930464925834:web:6ba7a08dfc40abe6a64573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};