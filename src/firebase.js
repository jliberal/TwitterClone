import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAViOC23DbwHQSoOOdtQF5pKjldEzH-GLs",
    authDomain: "twitter-clone-3cf4e.firebaseapp.com",
    databaseURL: "https://twitter-clone-3cf4e.firebaseio.com",
    projectId: "twitter-clone-3cf4e",
    storageBucket: "twitter-clone-3cf4e.appspot.com",
    messagingSenderId: "204144381782",
    appId: "1:204144381782:web:ee7a7e1838bdda62ca10f7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;