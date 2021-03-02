const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.upVote = functions.firestore
    .document("votes/{voteID}")
    .onCreate((snap, context) => {
      const linkUID = snap.data().linkUID;
      return db.collection("links").doc(linkUID).update({
        votes: admin.firestore.FieldValue.increment(1),
      });
    });

exports.downVote = functions.firestore
    .document("votes/{voteID}")
    .onDelete((snap, context) => {
      const linkUID = snap.data().linkUID;
      return db.collection("links").doc(linkUID).update({
        votes: admin.firestore.FieldValue.increment(-1),
      });
    });
