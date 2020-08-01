import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIbrS8oJTe_CPAuHre0RAYDmQR71voTP8",
  authDomain: "react-image-upload-28d88.firebaseapp.com",
  databaseURL: "https://react-image-upload-28d88.firebaseio.com",
  projectId: "react-image-upload-28d88",
  storageBucket: "react-image-upload-28d88.appspot.com",
  messagingSenderId: "744351867984",
  appId: "1:744351867984:web:da08bcbd4b454eb4f35d55",
};

Firebase.initializeApp(firebaseConfig);

const storage = Firebase.storage();
const database = Firebase.database();
const firestore = Firebase.firestore();

export { storage, database, firestore, Firebase as default };
