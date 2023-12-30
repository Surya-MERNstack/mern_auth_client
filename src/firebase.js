// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  "AIzaSyC_Cj0Qk8n_XmG5BEnIk5Y6bnTXO8AF1BI",
  authDomain: "mern-auth-6db32.firebaseapp.com",
  projectId: "mern-auth-6db32",
  storageBucket: "mern-auth-6db32.appspot.com",
  messagingSenderId: "352814858757",
  appId: "1:352814858757:web:15f872618cd6d51d2b526c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);