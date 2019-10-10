import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyD7BZ6CG8m4mUlCTGcOZQny6eoaTDFKYxA",
  authDomain: "testapp-fd79b.firebaseapp.com",
  databaseURL: "https://testapp-fd79b.firebaseio.com",
  projectId: "testapp-fd79b",
  storageBucket: "",
  messagingSenderId: "1052310254746",
  appId: "1:1052310254746:web:07604d1798fb4f496d5b23",
  measurementId: "G-BTBBTED1E8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase