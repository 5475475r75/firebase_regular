// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsje_Zv1R9hDdMo8IoEq1X8S5c79svKkQ",
  authDomain: "react-1-5e5e3.firebaseapp.com",
  projectId: "react-1-5e5e3",
  storageBucket: "react-1-5e5e3.appspot.com",
  messagingSenderId: "1070040434022",
  appId: "1:1070040434022:web:205f08f6690cff85d334a7",
  measurementId: "G-GW0JL7LDGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);