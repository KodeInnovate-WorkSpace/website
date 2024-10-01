import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr3NHoZmRUQ8D5P6QawxjtWMqxnAGy1hE",
  authDomain: "deal-done-properties.firebaseapp.com",
  projectId: "deal-done-properties",
  storageBucket: "deal-done-properties.appspot.com",
  messagingSenderId: "161318242736",
  appId: "1:161318242736:web:4caa6e51e19807d6c12e75",
  measurementId: "G-2XRMBJXT2Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
