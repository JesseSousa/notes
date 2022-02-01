import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIMphJuuY359wSI3mBEiyiFABk1L92r28',
  authDomain: 'notes-c87a7.firebaseapp.com',
  projectId: 'notes-c87a7',
  storageBucket: 'notes-c87a7.appspot.com',
  messagingSenderId: '240364242602',
  appId: '1:240364242602:web:08fcb34b6dd59b959cb2d3',
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
