import React from 'react';
import { Card, Divider, Grid, Icon, Image, Segment } from 'semantic-ui-react';

export const DayCard = ({ day: { name, year, season, color = 'teal' } }) => {
  return (
    <Card
      color={color}
      onClick={() => {
        console.log('CLICK!');
      }}
    >
      <Image />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Year {year}</Card.Meta>
        <Card.Description>
        <Segment.Group raised size="small">
          <Segment secondary>
            <Grid columns={2}>
                <Grid.Column>
                    Hez 12:17-45
                </Grid.Column>
                <Grid.Column>
                    Bz 1:1-12:45
                </Grid.Column>
            </Grid>
            <Divider vertical>OR</Divider>
          </Segment>
          <Segment secondary>
            <Grid columns={2}>
                <Grid.Column>
                    Ps 151
                </Grid.Column>
                <Grid.Column>
                    Sonet 92
                </Grid.Column>
            </Grid>
            <Divider vertical>OR</Divider>
          </Segment>
          <Segment secondary>
            <Grid columns={2}>
                <Grid.Column>
                    2 Hs 14:15-23 (24-62)
                </Grid.Column>
                <Grid.Column>
                    Bnz 12:1-45
                </Grid.Column>
            </Grid>
            <Divider vertical>OR</Divider>
          </Segment>
          <Segment secondary>
            <Grid columns={2}>
                <Grid.Column>
                    Gr 12:4-17
                </Grid.Column>
                <Grid.Column>
                    Jk 9:12-10:1 (15-17)
                </Grid.Column>
            </Grid>
            <Divider vertical>OR</Divider>
          </Segment>
          </Segment.Group>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='linkify' />
        15 Links
      </Card.Content>
    </Card>
  );
};
