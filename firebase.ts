// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6FJSOo5Hyk8DGrhWQLiiZNtmJqtSZVDc",
  authDomain: "spring-edtech.firebaseapp.com",
  projectId: "spring-edtech",
  storageBucket: "spring-edtech.appspot.com",
  messagingSenderId: "421470245418",
  appId: "1:421470245418:web:6ad04c83ee89d55b5b2953",
  measurementId: "G-ET2BFB1SKT"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export {auth};