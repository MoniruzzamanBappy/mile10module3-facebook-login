// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq5ZnuqqoQt5fY-edjXe49PVL_wcPVb5A",
  authDomain: "facebook-auth-login.firebaseapp.com",
  projectId: "facebook-auth-login",
  storageBucket: "facebook-auth-login.appspot.com",
  messagingSenderId: "649710564127",
  appId: "1:649710564127:web:f9f44a4bff7e753e18b62a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;