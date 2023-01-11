import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDd53NzsC0SnP5Zk5v4iZXLeqJdYrkRldg",
//   authDomain: "medipocket-1944c.firebaseapp.com",
//   projectId: "medipocket-1944c",
//   storageBucket: "medipocket-1944c.appspot.com",
//   messagingSenderId: "657591050698",
//   appId: "1:657591050698:web:1ecb7382070a454e42af33",
//   measurementId: "G-6YZNLZ0Z7P",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCILSNGV57q21TeffjtUb5AU-bLYKyJhho",
  authDomain: "medipocket2022.firebaseapp.com",
  projectId: "medipocket2022",
  storageBucket: "medipocket2022.appspot.com",
  messagingSenderId: "262308121730",
  appId: "1:262308121730:web:bec3f9ee459f7419e4389b",
  measurementId: "G-RP1QRM1C28",
};

// initializeApp(firebaseConfig);
// const app = getApp();
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
const storage = getStorage(app);
// added

export { auth, storage, db };
