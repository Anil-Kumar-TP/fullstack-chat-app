import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBa1RedbAsEGec9KL6GJrdACYrY_sleKVI",
  authDomain: "chat-app-f266f.firebaseapp.com",
  projectId: "chat-app-f266f",
  storageBucket: "chat-app-f266f.appspot.com",
  messagingSenderId: "99277565327",
  appId: "1:99277565327:web:3c27d8d93eb795a5682ffa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();