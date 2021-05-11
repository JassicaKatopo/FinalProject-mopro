import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA1lIY97ineDkOazZxtECRIzyqNDHHdRMs",
    authDomain: "finalproject-mopro.firebaseapp.com",
    databaseURL: "https://finalproject-mopro-default-rtdb.firebaseio.com",
    projectId: "finalproject-mopro",
    storageBucket: "finalproject-mopro.appspot.com",
    messagingSenderId: "973413477038",
    appId: "1:973413477038:web:e087116c980a273ecd9b3f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;