import  {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyD2B-kGcUMejjQkzGmuUuANvaa0M8xjhbU",
    authDomain: "ecommerce-7518b.firebaseapp.com",
    databaseURL: "https://ecommerce-7518b-default-rtdb.firebaseio.com",
    projectId: "ecommerce-7518b",
    storageBucket: "ecommerce-7518b.appspot.com",
    messagingSenderId: "965282149815",
    appId: "1:965282149815:web:e7be1ea3b88bb82308e432",
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app)
  const storage = getStorage(app)
  export {app, firestore, storage};
