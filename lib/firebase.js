import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0ZEbQ5zC-jvmNlNd6bdaI0fb8hqY_4LA",
  authDomain: "sheikhhami-d00bd.firebaseapp.com",
  projectId: "sheikhhami-d00bd",
  storageBucket: "sheikhhami-d00bd.firebasestorage.app",
  messagingSenderId: "1079508825989",
  appId: "1:1079508825989:web:0aee3a6ffa4dbf53e2b6ec",
};

// Initialize Firebase only if it hasn't been initialized yet
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in: ", user);
    })
    .catch((error) => {
      console.error("Error signing in: ", error.message);
    });
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully");
    })
    .catch((error) => {
      console.error("Error signing out: ", error.message);
    });
};
