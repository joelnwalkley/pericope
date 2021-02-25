import React from 'react';
import { Card, Icon, Image, List, Message } from 'semantic-ui-react';

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
          <Message>
            <List divided relaxed>
              <List.Content>Hezikiah 12:17-32 (33-54)</List.Content>
              <List.Content>Ps 151</List.Content>
              <List.Content>2nd Hes 3:9-4:12</List.Content>
              <List.Content>Gar 27:1-8</List.Content>
            </List>
          </Message>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='linkify' />
        15 Links
      </Card.Content>
    </Card>
  );
};
