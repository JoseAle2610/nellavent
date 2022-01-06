// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfKTQSbZcNHggGbWgt-MjlTxxTcV3-YwU",
  authDomain: "nellavent.firebaseapp.com",
  projectId: "nellavent",
  storageBucket: "nellavent.appspot.com",
  messagingSenderId: "192211724586",
  appId: "1:192211724586:web:a79a4cbf366e50014c1653",
  measurementId: "G-Y4M1KT10Q7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
