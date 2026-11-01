// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr2SE6Ie0cHaX7SNfH914ZtV7-PRUYHms",
  authDomain: "kunnothuparambapanchayathmela.firebaseapp.com",
  databaseURL: "https://kunnothuparambapanchayathmela-default-rtdb.firebaseio.com",
  projectId: "kunnothuparambapanchayathmela",
  storageBucket: "kunnothuparambapanchayathmela.firebasestorage.app",
  messagingSenderId: "913978955939",
  appId: "1:913978955939:web:a6bb3fbac1a8cf10d84716",
  measurementId: "G-RCW7E5VFJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);// Firebase web config is public; security comes from Authentication + Firestore rules.
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_APP_ID"
};
