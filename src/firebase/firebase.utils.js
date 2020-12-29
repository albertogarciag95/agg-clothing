import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDCIgnBaffZNmYaMXWRJFdpBMwjG8QDIKk",
  authDomain: "agg-clothing.firebaseapp.com",
  projectId: "agg-clothing",
  storageBucket: "agg-clothing.appspot.com",
  messagingSenderId: "938665794925",
  appId: "1:938665794925:web:5371133e9209a40ef84e64",
  measurementId: "G-771D52W9LT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
