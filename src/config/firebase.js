import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKlovOseIGYCxDz6vCHVajNHl0vqmylw4",
  authDomain: "bsociety-7d18c.firebaseapp.com",
  projectId: "bsociety-7d18c",
  storageBucket: "bsociety-7d18c.firebasestorage.app",
  messagingSenderId: "225414507317",
  appId: "1:225414507317:web:68bb77fd052394df6a3a7c",
  measurementId: "G-CRJ343RJXH"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };