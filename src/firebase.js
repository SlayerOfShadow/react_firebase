// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNExiAK2zPzKue34My-wGmgbY6hgDg9as",
    authDomain: "test-a6ed7.firebaseapp.com",
    projectId: "test-a6ed7",
    storageBucket: "test-a6ed7.appspot.com",
    messagingSenderId: "907031823502",
    appId: "1:907031823502:web:fb1c23f968e7a847c035df",
    measurementId: "G-PF0MCK3ZBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };