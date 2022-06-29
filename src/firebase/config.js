// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBqrQww0MqW_WQWyfB0gKXwCPXMOTEtB2w",
  authDomain: "jornalapp-83075.firebaseapp.com",
  projectId: "jornalapp-83075",
  storageBucket: "jornalapp-83075.appspot.com",
  messagingSenderId: "1011856072091",
  appId: "1:1011856072091:web:b3803bf0251e716917553e",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
