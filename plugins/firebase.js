// ~/plugins/firebase.js

import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCb8EyxN8EaPXht7eDoGGezFFh-rMRV6xI",
    authDomain: "awards-box-jamstack-app.firebaseapp.com",
    databaseURL: "https://awards-box-jamstack-app.firebaseio.com",
    projectId: "awards-box-jamstack-app",
    storageBucket: "awards-box-jamstack-app.appspot.com",
    messagingSenderId: "920078951566",
    appId: "1:920078951566:web:3660cf50f70236e1f355df",
    measurementId: "G-1Y4XF9ZZZ2"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const auth = firebase.auth()
export const googleAuth = new firebase.auth.GoogleAuthProvider()
export default firebase