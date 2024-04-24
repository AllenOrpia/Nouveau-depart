// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "nouveau-depart-blog.firebaseapp.com",
  projectId: "nouveau-depart-blog",
  storageBucket: "nouveau-depart-blog.appspot.com",
  messagingSenderId: "886301528845",
  appId: "1:886301528845:web:1f0fedd160607eebced644"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);