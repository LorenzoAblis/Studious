import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuTab8Y8l8DqGPodoC6a-U-OmYzyyiku0",
  authDomain: "aero-e1f2e.firebaseapp.com",
  projectId: "aero-e1f2e",
  storageBucket: "aero-e1f2e.appspot.com",
  messagingSenderId: "661286640765",
  appId: "1:661286640765:web:8e1e382b8a69a9c8c9a514",
  measurementId: "G-R1YWFNMPVV",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
