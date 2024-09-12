// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWHCv780c6YwY4YasdQDaX4zeq1n2oqbo",
  authDomain: "netflix-gpt-b4b2a.firebaseapp.com",
  projectId: "netflix-gpt-b4b2a",
  storageBucket: "netflix-gpt-b4b2a.appspot.com",
  messagingSenderId: "1014417189899",
  appId: "1:1014417189899:web:43c629e41713f3956e6b0e",
  measurementId: "G-MRH3XE6LTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();