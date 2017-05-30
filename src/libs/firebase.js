import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDnlL9dJVqmfpqb90xJDv8MBc6gvxFz2K8',
  authDomain: 'darebee-828fd.firebaseapp.com',
  databaseURL: 'https://darebee-828fd.firebaseio.com',
  projectId: 'darebee-828fd',
  storageBucket: 'darebee-828fd.appspot.com',
  messagingSenderId: '777756093616'
};

firebase.initializeApp(firebaseConfig);

export default firebase;