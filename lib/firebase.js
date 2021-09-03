import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAodWI-TyAWyplxcnTBu3Yk3fQL-ekn2po",
  authDomain: "next-blog-app-e993d.firebaseapp.com",
  projectId: "next-blog-app-e993d",
  storageBucket: "next-blog-app-e993d.appspot.com",
  messagingSenderId: "38642189563",
  appId: "1:38642189563:web:e7f4c08d6b96c87df29c5e",
};

if (!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { db, auth, storage };
