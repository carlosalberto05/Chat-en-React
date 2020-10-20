import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC3H6ZNEhwVvMvqtQ_0qqWxaOu-teets-M',
  authDomain: 'chat-react-ff363.firebaseapp.com',
  databaseURL: 'https://chat-react-ff363.firebaseio.com',
  projectId: 'chat-react-ff363',
  storageBucket: 'chat-react-ff363.appspot.com',
  messagingSenderId: '492684715260',
  appId: '1:492684715260:web:c5e924759fd60eb75ba379',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
