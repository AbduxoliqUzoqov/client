import { getApps, getApp, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO-_aCh4djgjHB3O8c8evzn_C2TW8NLnQ",
  authDomain: "imageb-1874f.firebaseapp.com",
  projectId: "imageb-1874f",
  storageBucket: "imageb-1874f.appspot.com",
  messagingSenderId: "460297414775",
  appId: "1:460297414775:web:1fb82e878ff34607a03e72"
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();
export { db, storage };