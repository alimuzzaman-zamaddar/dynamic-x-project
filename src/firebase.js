import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // 👈 add this


const firebaseConfig = {
  apiKey: "AIzaSyBGExSd26Qch5ynDqv99DkT-Wt-3qod5w4",
  authDomain: "stefano-2134b.firebaseapp.com",
  projectId: "stefano-2134b",
  storageBucket: "stefano-2134b.firebasestorage.app",
  messagingSenderId: "58492614151",
  appId: "1:58492614151:web:5062d2f07452af6dcc5ca2",
  measurementId: "G-PFRDC8WRQC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); // 👈 add this

