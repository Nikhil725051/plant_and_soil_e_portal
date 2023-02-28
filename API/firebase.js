// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app')
const {getStorage} = require('firebase/storage');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRL6o9kwDblHoDWPyT9H18dwjhZfqeKkI",
  authDomain: "plant-soil-e-portal.firebaseapp.com",
  projectId: "plant-soil-e-portal",
  storageBucket: "plant-soil-e-portal.appspot.com",
  messagingSenderId: "722432172361",
  appId: "1:722432172361:web:2b2db7fa825b1470097a98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports = getStorage(app);