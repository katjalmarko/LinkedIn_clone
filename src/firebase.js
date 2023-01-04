import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD8yF3vJH8wLvDpw9js-GZcTWR1CboO-w8",
  authDomain: "linkedin-clone-yt-79cbe.firebaseapp.com",
  projectId: "linkedin-clone-yt-79cbe",
  storageBucket: "linkedin-clone-yt-79cbe.appspot.com",
  messagingSenderId: "274100259537",
  appId: "1:274100259537:web:880e165051f690a8d0d3f0",
  measurementId: "G-S3X6ED4HNX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth };