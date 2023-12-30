import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAc8Y3f0J6I1rGPLr7ypv6eO_HhZ2vdNsc',
  authDomain: 'quoteapp-4dead.firebaseapp.com',
  projectId: 'quoteapp-4dead',
  storageBucket: 'quoteapp-4dead.appspot.com',
  messagingSenderId: '884723193390',
  appId: '1:884723193390:web:92d9cef0c0e542cc2731bf',
  measurementId: 'G-XY6J4Z2MFJ',
}

const firebase = initializeApp(firebaseConfig)
export const db = getFirestore(firebase)

export default firebase
