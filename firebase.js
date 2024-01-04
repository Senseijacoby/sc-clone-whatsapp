import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrcvSm8TxfL-hkB7YN0nBXIGLPn9zBS6I",
  authDomain: "sc-whatsapp.firebaseapp.com",
  projectId: "sc-whatsapp",
  storageBucket: "sc-whatsapp.appspot.com",
  messagingSenderId: "472748578103",
  appId: "1:472748578103:web:7c953eb554c5fef9cab6b2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
