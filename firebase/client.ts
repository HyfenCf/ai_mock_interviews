// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3bO5Yo-1mTlEcYLBLM2n5nhWB53p6TSM",
  authDomain: "prepify-99ce2.firebaseapp.com",
  projectId: "prepify-99ce2",
  storageBucket: "prepify-99ce2.firebasestorage.app",
  messagingSenderId: "265444812415",
  appId: "1:265444812415:web:34509fe6ed56a1b2b9014a",
  measurementId: "G-W9GTHFSC0Z",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
