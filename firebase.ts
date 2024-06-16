import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB3RytyK5co8wKRM53ILnotQODf0CwE79Y",
  authDomain: "ankitsingh-portfolio.firebaseapp.com",
  databaseURL: "https://ankitsingh-portfolio-default-rtdb.firebaseio.com",
  projectId: "ankitsingh-portfolio",
  storageBucket: "ankitsingh-portfolio.appspot.com",
  messagingSenderId: "1071436231053",
  appId: "1:1071436231053:web:a871b426e59e49626f4dc4",
  measurementId: "G-83M8TMFFP6"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const database = getDatabase(app);