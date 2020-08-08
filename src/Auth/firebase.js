import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAjIQiejq3y6kPMZ0VXCUEoK2V3J4FVCVc",
  authDomain: "school-quiz-app.firebaseapp.com",
  databaseURL: "https://school-quiz-app.firebaseio.com",
  projectId: "school-quiz-app",
  storageBucket: "school-quiz-app.appspot.com",
  messagingSenderId: "822456959207",
  appId: "1:822456959207:web:b190c3e36d21d26ddfe242",
  measurementId: "G-9BV4GDPRLR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
