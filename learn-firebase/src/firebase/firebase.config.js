// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Au4JEk6_SrZO3jE0eRViy5WZ249wRlU",
  authDomain: "learn-firebase-5f5f2.firebaseapp.com",
  projectId: "learn-firebase-5f5f2",
  storageBucket: "learn-firebase-5f5f2.firebasestorage.app",
  messagingSenderId: "483040437083",
  appId: "1:483040437083:web:5c9db15b67351c07a7707e",
  measurementId: "G-63Y4K3T8LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;