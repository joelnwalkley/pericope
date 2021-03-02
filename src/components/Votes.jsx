import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { FirebaseUser, db } from '../util/firebaseInit';

import { Button, Icon, Label, Popup } from 'semantic-ui-react';

export const Votes = ({ voteCount, linkUID }) => {
  const user = useContext(FirebaseUser);
  const [upVoted, setUpVoted] = useState(false);

  const handleVote = () => {
    console.log('CLICK!');
    if (upVoted) {
      db.collection('votes').doc(upVoted).delete();
      setUpVoted(false);
    } else {
      db.collection('votes').add({
        linkUID: linkUID,
        userUID: user.uid,
      });
      setUpVoted(true);
    }
  };

  useEffect(() => {
    const checkVote = async () => {
      if (user) {
        const priorVote = await db
          .collection('votes')
          .where('userUID', '==', user.uid)
          .where('linkUID', '==', linkUID)
          .limit(1)
          .get();
        if (priorVote.docs.length > 0) {
          setUpVoted(priorVote.docs[0].id);
        }
      }
    };
    checkVote();
    return () => {
      //
    };
  }, [user, linkUID, upVoted]);

  return (
    <>
      {!user ? (
        <Popup
          content='Login to Vote'
          position='top center'
          trigger={
            <Button as='div' labelPosition='right'>
              <Button>
                <Icon name='arrow alternate circle up' />
                Votes
              </Button>
              <Label as='a' basic pointing='left'>
                {voteCount}
              </Label>
            </Button>
          }
        />
      ) : (
        <>
          <Button as='div' labelPosition='right' onClick={handleVote}>
            <Button color={upVoted ? 'teal' : null}>
              {upVoted && <Icon name='arrow alternate circle up' />}
              Votes
            </Button>
            <Label as='a' basic pointing='left' color={upVoted ? 'teal' : null}>
              {voteCount}
            </Label>
          </Button>
        </>
      )}
    </>
  );
};
