// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn1Rzcrus7Rx52N0e-Kf5zUhj_hD3EVFg",
  authDomain: "private-route-firebase-project.firebaseapp.com",
  projectId: "private-route-firebase-project",
  storageBucket: "private-route-firebase-project.firebasestorage.app",
  messagingSenderId: "532873744166",
  appId: "1:532873744166:web:3b6034457da4a8a1eebbe7",
  measurementId: "G-YWM2Y5VTP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;

