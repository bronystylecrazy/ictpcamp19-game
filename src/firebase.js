import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyA5Sbzc_mzUd1cjy9sB_7vQdwESeD1V_iQ",
   authDomain: "ictp-camp2019.firebaseapp.com",
   databaseURL: "https://ictp-camp2019.firebaseio.com",
   projectId: "ictp-camp2019",
   storageBucket: "ictp-camp2019.appspot.com",
   messagingSenderId: "973243780579",
   appId: "1:973243780579:web:90b845eae465730f3864d6",
   measurementId: "G-GHFXLP66PL"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const guilds = db.collection('guilds');