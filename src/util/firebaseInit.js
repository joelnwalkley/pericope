import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import { firebaseConfig } from './firebaseConfig';
import { createContext } from 'react';

const FirebaseUser = createContext(null);

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();

export { firebaseConfig, FirebaseUser, db, auth };
