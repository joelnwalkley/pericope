import { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseUser, auth, db } from '../util/firebaseInit';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export const SignIn = () => {
  const user = useContext(FirebaseUser);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/',
    callbacks: {
      signInSuccessWithAuthResult: () => {
        const { uid, displayName, email } = auth.currentUser;

        //create or update user doc
        const userRef = db.collection('users').doc(auth.currentUser.uid);
        userRef
          .get()
          .then((doc) => {
            if (!doc.exists) {
              //create new user with no roles
              userRef.set({
                joined: new Date(),
                uid: uid,
                displayName: displayName,
                email: email,
                roles: {
                  submit: false,
                  review: false,
                },
              });
            } else {
              //update any changes in displayName or email
              userRef.update({
                displayName: displayName,
                email: email,
              });
            }
          })
          .catch((err) => {
            console.log('Error', err);
          });
      },
    },
  };

  if (!user) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={auth}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {user.displayName}! You are now signed-in!</p>
      <button onClick={() => auth.signOut()}>Sign-out</button>
    </div>
  );
};
