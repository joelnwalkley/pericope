import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { DayLinks } from './components/DayLinks';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container className='hero'>
          <Switch>
            <Route path='/day/:id' component={DayLinks} />
            <Route path='/' component={Home} />
          </Switch>
        </Container>
      </Router>
      <Footer />
    </>
  );
}

export default App;
