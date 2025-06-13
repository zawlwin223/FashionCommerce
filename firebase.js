import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB0nmrjcwyFj3td_pE8UfrxBMdyzDIIS5o',
  authDomain: 'fashioncommerce-6a4f7.firebaseapp.com',
  databaseURL: 'https://fashioncommerce-6a4f7-default-rtdb.firebaseio.com',
  projectId: 'fashioncommerce-6a4f7',
  storageBucket: 'fashioncommerce-6a4f7.firebasestorage.app',
  messagingSenderId: '725235834016',
  appId: '1:725235834016:web:712d1872441c0b3ac43dc5',
  measurementId: 'G-SB0EZ9JJXW',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
