import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyALRooXEgFO1P9tv6M9ruscdTmEVM8G8eo",
  authDomain: "facebook-clone-d7b54.firebaseapp.com",
  projectId: "facebook-clone-d7b54",
  storageBucket: "facebook-clone-d7b54.appspot.com",
  messagingSenderId: "259069803935",
  appId: "1:259069803935:web:6c7841ca4fbeefb6d851aa",
  measurementId: "G-TX24VYX60Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;