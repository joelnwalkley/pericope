const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

const express = require('express');
const app = express();

//CLOUD FUNCTIONS (BACKGROUND)
exports.upVote = functions.firestore
  .document('votes/{voteID}')
  .onCreate((snap, context) => {
    const linkUID = snap.data().linkUID;
    return db
      .collection('links')
      .doc(linkUID)
      .update({
        votes: admin.firestore.FieldValue.increment(1),
      });
  });

exports.downVote = functions.firestore
  .document('votes/{voteID}')
  .onDelete((snap, context) => {
    const linkUID = snap.data().linkUID;
    return db
      .collection('links')
      .doc(linkUID)
      .update({
        votes: admin.firestore.FieldValue.increment(-1),
      });
  });

//EXPRESS API
app.get('/helloworld', (req, res) => {
  res.send('Hello World!');
});

exports.apiV1 = functions.https.onRequest(app);
