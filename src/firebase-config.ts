// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbPRHUSgZjBeiIML2p7j5gnmBkBVz43ts",
  authDomain: "docs-clone-tut-73e3e.firebaseapp.com",
  projectId: "docs-clone-tut-73e3e",
  storageBucket: "docs-clone-tut-73e3e.firebasestorage.app",
  messagingSenderId: "1064202113883",
  appId: "1:1064202113883:web:7d942b9055b4bb3ff8407e",
  measurementId: "G-RS9XPYTKM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)