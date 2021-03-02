import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../util/firebaseInit';

import {
  Advertisement,
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Item,
  Message,
  Segment,
} from 'semantic-ui-react';

import { LinkItem } from './LinkItem';

import { days } from '../data/days';

export const DayLinks = () => {
  const { id } = useParams();
  const thisDay = days.filter((day) => day.id === id)[0];
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const linkQuery = db
      .collection('links')
      .where('days', 'array-contains', id)
      .orderBy('submit.date')
      .limit(100);
    const queryListener = linkQuery.onSnapshot((querySnapshot) => {
      const links = [];
      querySnapshot.forEach((doc) => {
        links.push(doc.data());
      });
      setLinks(links);
      setIsLoading(false);
    });

    return () => {
      queryListener();
    };
  }, [id]);

  return (
    <Container>
      <Grid stackable columns={2}>
        <Grid.Column width={5}>
          <Advertisement
            unit='medium rectangle'
            test='Advertisement Placeholder'
          />
        </Grid.Column>
        <Grid.Column width={11}>
          <Header as='h2'>
            {thisDay.name}
            <Header.Subheader>Top 100 Links</Header.Subheader>
          </Header>
          {isLoading ? (
            <Message icon>
              <Icon name='circle notched' loading />
              <Message.Content>
                <Message.Header>Loading</Message.Header>
                Getting links...
              </Message.Content>
            </Message>
          ) : (
            <Container>
              <Segment clearing>
                <Header as='h3' floated='left'>
                  Sort by...
                </Header>
                <Button icon color='teal' floated='right'>
                  <Icon name='arrow up' />
                  Most Recent
                </Button>
                <Button basic floated='right'>
                  Votes
                </Button>
              </Segment>
              <Item.Group divided>
                {links.map((link, i) => (
                  <LinkItem key={i} link={link} />
                ))}
              </Item.Group>
            </Container>
          )}
          {!isLoading && links.length === 0 && (
            <Message info icon>
              <Icon name='info circle' />
              <Message.Content>
                <Message.Header>
                  Sorry, no links found for this day.
                </Message.Header>
                Please check again later. Our contributors are constantly
                updating the links.
              </Message.Content>
            </Message>
          )}
        </Grid.Column>
      </Grid>
    </Container>
  );
};
