import { useParams } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Container,
  Grid,
  Header,
  Item,
  Message,
  Segment,
} from 'semantic-ui-react';

import { Links } from './Links';

const links = ['1', '2', '3', '4', '5'];

export const DayLinks = () => {
  const { id } = useParams();

  return (
    <Container>
      <Grid stackable columns={2}>
        <Grid.Column width={4}>
          <Header as='h2'>Filters</Header>
          <Message info>
            <Message.Header>Show Only...</Message.Header>
            <br />
            <Checkbox label='Filter One' toggle />
          </Message>
        </Grid.Column>
        <Grid.Column width={12}>
          <Header as='h2'>Top Links for {id}</Header>
          <Container>
            <Segment clearing>
              <Header as='h3' floated='left'>Sort by...</Header>
              <Button floated='right'>Most Recent</Button>
              <Button floated='right'>Votes</Button>
              </Segment>
              <Item.Group divided>
                {links.map((link, i) => (
                  <Links key={i} link={link} />
                ))}
              </Item.Group>
            
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
