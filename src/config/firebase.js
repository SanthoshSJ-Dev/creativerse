// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBvimsluEqewIw1zcd4asYNqGnIUTjRMSw",
  authDomain: "creativerse-f0ad2.firebaseapp.com",
  projectId: "creativerse-f0ad2",
  storageBucket: "creativerse-f0ad2.appspot.com",
  messagingSenderId: "429699432542",
  appId: "1:429699432542:web:ca7682989aa3acbadfb4cf",
  measurementId: "G-WREZB91913",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);



