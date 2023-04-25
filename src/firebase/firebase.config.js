// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4_PaO415tOzmvxHJB8gjOgBMPXxJNN-U",
  authDomain: "the-news-dragon-fedcc.firebaseapp.com",
  projectId: "the-news-dragon-fedcc",
  storageBucket: "the-news-dragon-fedcc.appspot.com",
  messagingSenderId: "365292816286",
  appId: "1:365292816286:web:3bc61f89164c4d2266388f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;