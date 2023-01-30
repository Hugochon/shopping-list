import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbaVLkaL5v0OIwtcgEhFBGTQ43dShUsIQ",
  authDomain: "liste-courses-1e020.firebaseapp.com",
  projectId: "liste-courses-1e020",
  storageBucket: "liste-courses-1e020.appspot.com",
  messagingSenderId: "388576572218",
  appId: "1:388576572218:web:c46e6146bdc66b0fccd603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db