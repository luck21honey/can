// ~/plugins/firebase.js

import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "Put your API here",
    authDomain: "your-project-name.firebaseapp.com",
    databaseURL: "https://your-project-name.firebaseio.com",
    projectId: "your-project-name",
    storageBucket: "your-project-name.appspot.com",
    messagingSenderId: "Put your messaging sender ID here",
    appId: "Put your app ID here"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const auth = firebase.auth()
export default firebase