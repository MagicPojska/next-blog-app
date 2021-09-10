import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

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
const firestore = firebase.firestore();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firestore, auth, storage, googleAuthProvider };

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
