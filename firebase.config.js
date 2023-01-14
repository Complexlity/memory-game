// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*This is used in vite build applications to get environmental variables. See https://vitejs.dev/guide/env-and-mode.html*/
const ENV = import.meta.env;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: ENV.VITE_API_KEY,
  authDomain: ENV.VITE_AUTH_DOMAIN,
  projectId: ENV.VITE_PROJECT_ID,
  storageBucket: ENV.VITE_STORAGE_BUCKET,
  messagingSenderId: ENV.VITE_MESSAGING_SENDER_ID,
  appId: ENV.VITE_APP_ID,
  measurementId: ENV.MEASUREMENT_ID,
};

// Initializes the application
const app = initializeApp(firebaseConfig);

// Initializes the authentication system used by your application on firebase
const auth = getAuth(app);

// Initializes the cloud firestore used by your application on the firebase
const db = getFirestore(app);

export { app, auth, db };
