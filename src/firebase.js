import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC54AoYedGEjxnQfRXC-VYeV74eQT6hjGU",
  authDomain: "firemarks-development.firebaseapp.com",
  projectId: "firemarks-development",
  storageBucket: "firemarks-development.appspot.com",
  messagingSenderId: "89976172266",
  appId: "1:89976172266:web:b0a50fd6fe444ff986b193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app)