import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "studio-294120425-a68bd",
  appId: "1:712040305631:web:c535fa6cd69039f10c2a6a",
  apiKey: "AIzaSyBfOswndtPNE4I88qnTcGUiaeDpuz5tg5M",
  authDomain: "studio-294120425-a68bd.firebaseapp.com",
  messagingSenderId: "712040305631",
  storageBucket: "studio-294120425-a68bd.appspot.com",
};

// Initialize Firebase
function getFirebaseApp(): FirebaseApp {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
}

export const firebaseApp = getFirebaseApp();
export { firebaseConfig };
