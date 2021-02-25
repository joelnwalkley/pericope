import React from 'react';
import { Button, Icon, Menu } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <Menu secondary size='massive'>
      <Menu.Item>
        <Icon name='linkify' color='teal' />
        Sermon Links
      </Menu.Item>
      <Menu.Item>Revised Common Lectionary</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Button basic color='teal'>
            <Icon name='add circle' color='teal' />
            Submit Link
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button basic color='teal'>
            Sign Up / Sign In
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
