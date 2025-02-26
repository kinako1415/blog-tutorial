import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASmVTQv3En7190_X6WbT8dKq2VFUORrWU",
  authDomain: "blog-tutorial-68b34.firebaseapp.com",
  projectId: "blog-tutorial-68b34",
  storageBucket: "blog-tutorial-68b34.firebasestorage.app",
  messagingSenderId: "981921703679",
  appId: "1:981921703679:web:d8284f2ed61eb93243ceca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
