import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6CdFxc7BodbsQdpKpqHX7GNptQs1ETIM",
  authDomain: "socialreact-4e311.firebaseapp.com",
  databaseURL: "https://socialreact-4e311-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "socialreact-4e311",
  storageBucket: "socialreact-4e311.appspot.com",
  messagingSenderId: "543322854718",
  appId: "1:543322854718:web:ecaa2e8b1dfe4096cd486f",
  measurementId: "G-Y6VCYDJ5YF"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);