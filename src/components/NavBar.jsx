import { useContext } from 'react';
import { FirebaseUser } from '../util/firebaseInit';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu } from 'semantic-ui-react';

const NavBar = () => {
  const user = useContext(FirebaseUser);
  return (
    <Menu stackable secondary size='massive'>
      <Menu.Item as={Link} to='/'>
        <Icon name='linkify' color='teal' />
        Sermon Links
      </Menu.Item>
      <Menu.Item>Revised Common Lectionary</Menu.Item>
      <Menu.Menu position='right'>
        {user?.roles?.submit && (
          <Menu.Item as={Link} to='/submit'>
            <Button basic color='teal'>
              <Icon name='add circle' color='teal' />
              Submit Link
            </Button>
          </Menu.Item>
        )}
        <Menu.Item as={Link} to='/signin'>
          <Button basic color='teal'>
            Sign Up / Sign In
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
