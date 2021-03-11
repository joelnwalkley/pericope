import { useContext } from 'react';
import { FirebaseUser, auth } from '../util/firebaseInit';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu } from 'semantic-ui-react';

export const NavBar = () => {
  const user = useContext(FirebaseUser);
  return (
    <Menu stackable secondary size='massive'>
      <Menu.Item as={Link} to='/'>
        <Icon name='paragraph' color='teal' />
        Pericope
      </Menu.Item>
      <Menu.Item>Revised Common Lectionary</Menu.Item>
      <Menu.Item>Narrative Lectionary</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item as={Link} to='/about'>
          About
        </Menu.Item>
          <Menu.Item as={Link} to={user ? '/submit' : '/signin'}>
            <Button basic color='teal'>
              <Icon name='add circle' color='teal' />
              Submit Link
            </Button>
          </Menu.Item>
        {user ? (
          <Menu.Item>
            <Button basic color='teal' onClick={() => auth.signOut()}>
              Sign Out
            </Button>
          </Menu.Item>
        ) : (
          <Menu.Item as={Link} to='/signin'>
            <Button basic color='teal'>
              Sign Up / Sign In
            </Button>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};
