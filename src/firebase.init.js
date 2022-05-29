// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDa9edRvzKHbLdzO1jayaNEYB2cj0VHO58",
    authDomain: "nfs-camera-zone.firebaseapp.com",
    projectId: "nfs-camera-zone",
    storageBucket: "nfs-camera-zone.appspot.com",
    messagingSenderId: "916570955565",
    appId: "1:916570955565:web:28294bc457fdabcad33da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;