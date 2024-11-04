// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // تأكد من أن الاستيراد هنا صحيح

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8KG0j2ws-C-SX1uKzZBqX_I7MJxEZyjM",
  authDomain: "reactcommarece.firebaseapp.com",
  projectId: "reactcommarece",
  storageBucket: "reactcommarece.appspot.com", // تعديل طفيف هنا
  messagingSenderId: "793208827828",
  appId: "1:793208827828:web:a7970b3e37f9969e10cce1",
  measurementId: "G-P4F72WRY9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // لا يوجد مسافة بعد getAuth
