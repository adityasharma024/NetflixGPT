// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIU8Qt1GjQbIFHUUWkifsjpuaq_TLdYFs",
  authDomain: "netflixgpt-a23b1.firebaseapp.com",
  projectId: "netflixgpt-a23b1",
  storageBucket: "netflixgpt-a23b1.appspot.com",
  messagingSenderId: "463720445793",
  appId: "1:463720445793:web:09b180a84d1e7b2ff83720",
  measurementId: "G-6PXNCMNKXR"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();