import { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseUser, auth, db } from '../util/firebaseInit';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {
  Button,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';

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
  return (
    <>
      {user ? (
        <>
          <Header as='h2'>Already Signed In</Header>
          <Header.Subheader>Welcome, {user?.displayName}</Header.Subheader>
          <Button onClick={() => auth.signOut()}>Sign Out</Button>
        </>
      ) : (
        <>
        <Grid stackable columns={2}>
          <Grid.Column>
          <Header as='h2'>
            Please Sign In / Create an Account
            <Header.Subheader>
              Creating an account allows you to:
            </Header.Subheader>
          </Header>
          <Segment divided compact>
            <List divided relaxed>
              <List.Item>
                <List.Icon
                  name='check circle outline'
                  size='big'
                  verticalAlign='middle'
                  color='teal'
                />
                <List.Content>
                  <List.Header as='h3'>Vote on links</List.Header>
                  <List.Description as='a'>
                    Help other preachers find the best resources.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon
                  name='check circle outline'
                  size='big'
                  verticalAlign='middle'
                  color='teal'
                />
                <List.Content>
                  <List.Header as='h3'>Submit Links</List.Header>
                  <List.Description as='a'>
                    Become eligible for invitation to serve as a link submiter/reviewer.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon
                  name='check circle outline'
                  size='big'
                  verticalAlign='middle'
                  color='teal'
                />
                <List.Content>
                  <List.Header as='h3'>Future Features</List.Header>
                  <List.Description as='a'>
                    Other features as they are developed.
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
          </Grid.Column>
          <Grid.Column>
            <Header as='h5' textAlign='center' dividing>"Sign in" will create an account if you do not already have one.</Header>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          </Grid.Column>
        </Grid>
        </>
      )}
    </>
  );
};
