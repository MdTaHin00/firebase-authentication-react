// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBznaxFEg3ZNJCPyDsTwJjW6pSHxOUXqIY",
  authDomain: "social-media-login-4bf31.firebaseapp.com",
  projectId: "social-media-login-4bf31",
  storageBucket: "social-media-login-4bf31.firebasestorage.app",
  messagingSenderId: "1006140161201",
  appId: "1:1006140161201:web:b443fb4e9902cb0203f690",
  measurementId: "G-W5L5369CJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app ;