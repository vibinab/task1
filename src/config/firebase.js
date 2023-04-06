// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4lm-LSlsAuMBOkDNasWYSGwQ5dXriSVo",
  authDomain: "authproject-7cdb1.firebaseapp.com",
  projectId: "authproject-7cdb1",
  storageBucket: "authproject-7cdb1.appspot.com",
  messagingSenderId: "622017530309",
  appId: "1:622017530309:web:47fb785cae5a5c222ca3ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app) 
const provider= new GoogleAuthProvider(); 
export {auth,provider};

