import firebase from "firebase";

const firebaseApp = firebase.initializeApp({});

export const db = firebase.firestore();
