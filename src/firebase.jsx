import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEZQ2LBWIs-YJEns-YIWlyaGv2XH2c-gs",
  authDomain: "worker-details-9487a.firebaseapp.com",
  projectId: "worker-details-9487a",
  storageBucket: "worker-details-9487a.firebasestorage.app",
  messagingSenderId: "1079999377120",
  appId: "1:1079999377120:web:aecf4cf800c6303127ea85"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);