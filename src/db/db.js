import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUACEiImkgXI-6-QkBDZZt-WJDtaIbPWs",
  authDomain: "ecommerce-88020.firebaseapp.com",
  projectId: "ecommerce-88020",
  storageBucket: "ecommerce-88020.firebasestorage.app",
  messagingSenderId: "592361203018",
  appId: "1:592361203018:web:210f582667b1ae98fe0db3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;