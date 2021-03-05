# Pericope
A searchable directory of online commentaries regarding the assigned texts for Sundays and holy days in Christian traditions.

**pe·ric·o·pe /pəˈrikəpē/**  
Pericope, form the Greek περικοπή "cutting around", refers to portions of scripture specifically selected for public worship services especially in more liturgical traditions. I have known many folks refer to the sermon preparation groups I've participated in as "pericope study." 

It may also share some etymology with the word *paragraph*, which is why I choose the current simple logo ¶.

This app is modeled from [Text Week](textweek.com) which is a static directory serving a similar purpose and audience.

---
## Features
- The Links collection is publically accessible.
   - Filter-search by Sunday or text from the main page. Click on a day to see all the associated links.
   - Default view sorts by most upvoted links.
- All authenticated users can upvote links.
   - Users can only remove their own upvote.
- Users with submitter role can add links.
   -   Submitters are prevented from adding duplicate links, and must tag with at least one day from a dropdown which includes suggestions. 

---
## Development Notes

### The "FERN" Stack
- Firestore (Google Firebase) for database
- Express - planed for "next steps" development
- React
- Node for Firebase Cloud Functions

### Firebase config
I ommitted the config object for the live project from this repo. Compliation will fail without a working config however. Create a [Firebase](https://firebase.google.com/) project and add your config file to /src/util/firebaseConfig and be sure to name the export as shown in this snippet:

```javascript
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

export { firebaseConfig };
```
### Architecture

#### React Components
All components are in a single ```src/components``` file. This may change as the project grows in complexity. 

#### Data Models
Data models are found in ```src/data```
These files show how individual documents are structured in Firestore. You could import them instead of a call to the database if you are interested in testing the UI only without setting up Firebase.

I did not include the votes data model, which is a simple list of the linkUID with a userUID.

#### Util
- Firebase configuration including a context provider for current user.
- validators for the link submit form.

#### App.js
The top-level ```App.js``` handles Firebase auth including a change-status listener, settings a current user Context, and React Router.

#### Cloud Functions
See ```functions/index.js```
Manages the upvote/downvote counter on create/delete document in the votes collection.

#### Styling
[Semantic React UI](https://react.semantic-ui.com/)


## Runing locally
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

Use `yarn start` to run (after successful install)

---
## Developer / Maintainer Contact
Contact: joelnwalkley@gmail.com

This is a hobby side-project which strives to provide a web tool for preachers while also helping improve my coding skills. Additionally, it serves as a professional portfolio item.

Contributors are welcome, but please remember this is my first open-source project.