import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnG4uEHrw_pHd7JB8TmwwsdF06-J-y5t4",
  authDomain: "fir-learning-70ea6.firebaseapp.com",
  databaseURL: "https://fir-learning-70ea6-default-rtdb.firebaseio.com",
  projectId: "fir-learning-70ea6",
  storageBucket: "fir-learning-70ea6.firebasestorage.app",
  messagingSenderId: "1072037426095",
  appId: "1:1072037426095:web:485bdaa2607f5f2890355a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

