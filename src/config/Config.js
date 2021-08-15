// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLj_TGcW5hCmhHjB8EFgVyma8PV1dQh9Y",

  authDomain: "crud-4bfec.firebaseapp.com",

  databaseURL: "https://crud-4bfec-default-rtdb.firebaseio.com",

  projectId: "crud-4bfec",

  storageBucket: "crud-4bfec.appspot.com",

  messagingSenderId: "611187271763",

  appId: "1:611187271763:web:f1b89f84e03bc3c6fa3ea6",

  measurementId: "G-HBBTJ807QV"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
