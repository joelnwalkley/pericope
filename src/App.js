//react
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//firebase
import { FirebaseUser, db, auth } from './util/firebaseInit';

//ui
import './App.css';
import { Container } from 'semantic-ui-react';

//components
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { DayLinks } from './components/DayLinks';
import { SubmitLink } from './components/SubmitLink';
import { SignIn } from './components/SignIn';
import { AboutPage } from './components/AboutPage';
import { NavBar } from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection('users')
          .doc(user.uid)
          .onSnapshot((doc) => {
            const { uid, displayName, email, roles } = doc.data() || {};
            setUser({
              uid,
              displayName,
              email,
              roles,
            });
          });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <FirebaseUser.Provider value={user}>
        <Router>
          <NavBar />
          <Container className='hero'>
            <Switch>
              <Route path='/day/:id' component={DayLinks} />
              <Route path='/submit' component={SubmitLink} />
              <Route path='/signin' component={SignIn} />
              <Route path='/about' component={AboutPage} />
              <Route path='*' component={Home} />
            </Switch>
          </Container>
          <Footer />
        </Router>
      </FirebaseUser.Provider>
    </>
  );
}

export default App;
