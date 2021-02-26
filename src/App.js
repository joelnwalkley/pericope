import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Container className="hero">
        <Route path='/' exact component={Home} />
        <Route path='/day/:id' component={DayLinks} />
        </Container>
      </Router>
      <Footer />
    </>
  );
}

export default App;
