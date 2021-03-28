import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyCH_uw9SgJbUMiKkKhMYIlND8rkCS1fqUM",
    authDomain: "react-auth-firebase-eeffc.firebaseapp.com",
    databaseURL: "https://react-auth-firebase-eeffc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-auth-firebase-eeffc",
    storageBucket: "react-auth-firebase-eeffc.appspot.com",
    messagingSenderId: "921017042201",
    appId: "1:921017042201:web:b851f3ff85fc75c6d37188"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;