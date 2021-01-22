import firebase from "firebase";

const App = firebase.initializeApp({
  apiKey: "AIzaSyA3gfWclzhqtWJ924zucNdJ08MXMe_BdNM",
  authDomain: "personal-portfolio-websi-c45ca.firebaseapp.com",
  projectId: "personal-portfolio-websi-c45ca",
  storageBucket: "personal-portfolio-websi-c45ca.appspot.com",
  messagingSenderId: "950494840266",
  appId: "1:950494840266:web:22c0c7acbd2c71bdc17b33",
});

const auth = App.auth();

const db = firebase.firestore();

export { auth, db };
