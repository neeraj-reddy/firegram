import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAhxt5WvNSaQm2KrdnW-Ieeje8v8lxj6L8",
  authDomain: "firegram-xenos.firebaseapp.com",
  databaseURL: "https://firegram-xenos.firebaseio.com",
  projectId: "firegram-xenos",
  storageBucket: "firegram-xenos.appspot.com",
  messagingSenderId: "345364078375",
  appId: "1:345364078375:web:24a6c3d611d5d3c5a99302",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
