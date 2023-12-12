import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3i5VmP5VEoumC91AF0k_Muhjx8u1eUKQ",
  authDomain: "studious-16d12.firebaseapp.com",
  projectId: "studious-16d12",
  storageBucket: "studious-16d12.appspot.com",
  messagingSenderId: "399429664583",
  appId: "1:399429664583:web:50d40bbd15ff44b27d9662",
  measurementId: "G-8ZMFF31ZCD",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
