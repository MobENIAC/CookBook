// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCYb9HMawAEikHdaXs3SSf_DEYrlfFY__0",
  authDomain: "cookbook-1b0a6.firebaseapp.com",
  projectId: "cookbook-1b0a6",
  storageBucket: "cookbook-1b0a6.appspot.com",
  messagingSenderId: "562882914840",
  appId: "1:562882914840:web:10fee5f8554e346afff16d",
  measurementId: "G-WC1VET48HG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*   const analytics = getAnalytics(app); */

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
