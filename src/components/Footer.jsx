import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Header, Icon } from 'semantic-ui-react';

export const Footer = () => {
  return (
      <>
    <Container className='hero'><br/></Container>
    <div className='footer'>
      <Grid verticalAlign='middle' textAlign='center' columns={2}>
        <Grid.Row color='teal'>
          <Grid.Column as={Link} to='/' floated='left'>
            <Header as='h5'>
              <Icon name='paragraph'/>
              Pericope</Header>
          </Grid.Column>
          <Grid.Column floated='right'>
            <Button
              href='https://www.buymeacoffee.com/pericope'
              target='_blank'
              rel='noreferrer'
            >
              <Icon color='teal' name='coffee' />
              Buy Me A Coffee
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      </>
  );
};
