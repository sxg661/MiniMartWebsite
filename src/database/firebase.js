import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyDg11q5M8vDAqhztt4LBmk3DeTTwYdDYpc",
    authDomain: "minimart-5d4e9.firebaseapp.com",
    projectId: "minimart-5d4e9",
    storageBucket: "minimart-5d4e9.appspot.com",
    messagingSenderId: "773348357152",
    appId: "1:773348357152:web:f83153bdbae90ef10d7845",
    showNonProdPosts: true
  };
const app = initializeApp(firebaseConfig);

const firestoreDb = getFirestore(app);

export default firestoreDb;