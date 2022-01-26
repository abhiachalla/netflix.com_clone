import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: process.env.APP_KEY,
//   authDomain: "netflix-151df.firebaseapp.com",
//   projectId: "netflix-151df",
//   storageBucket: "netflix-151df.appspot.com",
//   messagingSenderId: "316700975498",
//   appId: "1:316700975498:web:15063159b205c1a349a873",
//   measurementId: "G-2ZGE63ES9F",
// };
const firebaseConfig = {

  // apiKey: process.env.APP_KEY,
  // authDomain: "netflix-clone-f29d9.firebaseapp.com",
  // projectId: "netflix-clone-f29d9",
  // storageBucket: "netflix-clone-f29d9.appspot.com",
  // messagingSenderId: "869097815805",
  // appId: "1:869097815805:web:1f4c2cc3a76dc8f5d90894",
  // measurementId: "G-PLBV8BDCCZ"

  apiKey: process.env.APP_KEY,
  authDomain: "netflix-clone-f29d9.firebaseapp.com",
  projectId: "netflix-clone-f29d9",
  storageBucket: "netflix-clone-f29d9.appspot.com",
  messagingSenderId: "869097815805",
  appId: "1:869097815805:web:086b502d7aca6f1fd90894",
  measurementId: "G-TDD4QB0W2D"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
