import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyDlXvfkB_N9AgSj6k20daTbJ-wcLTmnUSk",
  authDomain: "project-67-e5ef1.firebaseapp.com",
  databaseURL: "https://project-67-e5ef1-default-rtdb.firebaseio.com",
  projectId: "project-67-e5ef1",
  storageBucket: "project-67-e5ef1.appspot.com",
  messagingSenderId: "772869482645",
  appId: "1:772869482645:web:f158432b3b7bbbb767939c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
