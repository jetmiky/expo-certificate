// Firebase
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmgkb5oToFpFHn48F206oJ-a8hqHfj1nk",
  authDomain: "expo-certificate.firebaseapp.com",
  projectId: "expo-certificate",
  storageBucket: "expo-certificate.appspot.com",
  messagingSenderId: "517458300355",
  appId: "1:517458300355:web:b0ba2b7927884c6bfc0176",
  measurementId: "G-9K2Y38TDKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

if (import.meta.env.MODE === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
}
