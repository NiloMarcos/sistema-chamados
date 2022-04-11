import firebase from "firebase/app";
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyB4VmFxOS-sTTQ7Bwv8EA7hjPLVAQyu0dA",
  authDomain: "sistemas-chamados-64b7b.firebaseapp.com",
  projectId: "sistemas-chamados-64b7b",
  storageBucket: "sistemas-chamados-64b7b.appspot.com",
  messagingSenderId: "682117604539",
  appId: "1:682117604539:web:994072673e8956e77eb59e",
  measurementId: "G-RVHQFZV496"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;