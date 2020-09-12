import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDl94sHeHj2XJxtz3ixCMw4FI04SAKhDyc",
    authDomain: "whatsapp-clone-mern-91dc1.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-mern-91dc1.firebaseio.com",
    projectId: "whatsapp-clone-mern-91dc1",
    storageBucket: "whatsapp-clone-mern-91dc1.appspot.com",
    messagingSenderId: "653290601993",
    appId: "1:653290601993:web:cb6456f97abc43774182d8",
    measurementId: "G-K58DDCH0VW"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  
  // User Authetication Setup
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};

  // Database Setup
  const db = firebaseApp.firestore();
  export default db;