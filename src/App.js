import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { DayLinks } from './components/DayLinks';
import { Container } from 'semantic-ui-react';
import { SubmitLink } from './components/SubmitLink';
import { SignIn } from './components/SignIn';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container className='hero'>
          <Switch>
            <Route path='/day/:id' component={DayLinks} />
            <Route path='/submit' component={SubmitLink} />
            <Route path='/signin' component={SignIn}/>
            <Route path='/' component={Home} />
          </Switch>
        </Container>
      </Router>
      <Footer />
    </>
  );
}

export default App;
