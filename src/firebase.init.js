// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-0kjQk40AFuFA7TrlxRXJIJXFPP1TEP8",
    authDomain: "electricity-services.firebaseapp.com",
    projectId: "electricity-services",
    storageBucket: "electricity-services.appspot.com",
    messagingSenderId: "951030316073",
    appId: "1:951030316073:web:5d3e712d1892b0a29eb038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;