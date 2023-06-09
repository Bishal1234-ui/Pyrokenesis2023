// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyBGW68BJnwjPqBaMB79hHEXgFC7ZpMzVVc",
  // authDomain: "pyrokinesis.firebaseapp.com",
  // projectId: "pyrokinesis",
  // storageBucket: "pyrokinesis.appspot.com",
  // messagingSenderId: "220355818293",
  // appId: "1:220355818293:web:bbeff73e030505d58e927c",
  // measurementId: "G-E8E1QK3NSB"
  // apiKey: "AIzaSyCSWuzqZVx06s2Uhi1Fn-oJQs0sdiGsDrg",
  // authDomain: "pyrokinesis-4394f.firebaseapp.com",
  // projectId: "pyrokinesis-4394f",
  // storageBucket: "pyrokinesis-4394f.appspot.com",
  // messagingSenderId: "915848076337",
  // appId: "1:915848076337:web:4b1beb4d9ebd91d937c910",
  // measurementId: "G-KFN2TV0YVW"
  apiKey: "AIzaSyD1OKzHYhX6Spcii8hcFCOuDkwAdUZjsXY",
  authDomain: "pyrokinesis-1af7c.firebaseapp.com",
  projectId: "pyrokinesis-1af7c",
  storageBucket: "pyrokinesis-1af7c.appspot.com",
  messagingSenderId: "126328707037",
  appId: "1:126328707037:web:6537a0decd4ab1bd200834",
  measurementId: "G-N5NPW0NHPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const db = getFirestore(); 
export { app, auth };