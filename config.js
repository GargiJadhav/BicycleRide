

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBWl4ZWhiCua6IJln3bXc65htRaGOJb2w8",
  authDomain: "cycleride-19d1b.firebaseapp.com",
  projectId: "cycleride-19d1b",
  storageBucket: "cycleride-19d1b.appspot.com",
  messagingSenderId: "912271599806",
  appId: "1:912271599806:web:969e14cc1b85b20d1cd6ef"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()