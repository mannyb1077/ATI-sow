import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBCMr2zhAYH21rsw2DJRpXO-mhaEO-yd4o",
  authDomain: "atisow-357dd.firebaseapp.com",
  databaseURL: "https://atisow-357dd.firebaseio.com",
  projectId: "atisow-357dd",
  storageBucket: "atisow-357dd.appspot.com",
  messagingSenderId: "94473921264",
  appId: "1:94473921264:web:3b3ccc8ab43c1f7d761835",
  measurementId: "G-QT5HMQ8X9K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
