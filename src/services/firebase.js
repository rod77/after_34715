// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVrCbj7Z3_wS5Zw7mduzZ77K18GAlYPDY",
  authDomain: "ecommerce-73786.firebaseapp.com",
  projectId: "ecommerce-73786",
  storageBucket: "ecommerce-73786.appspot.com",
  messagingSenderId: "205929765003",
  appId: "1:205929765003:web:7a738d029cad7fb8dadc8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db