import { Link } from 'react-router-dom';

import { Card, Icon, Image, Label } from 'semantic-ui-react';

export const DayCard = ({ day: { id, name, year, texts, color = 'teal' } }) => {
  return (
    <Card
      color={color}
      as={Link}
      to={'/day/'+id}
    >
      <Image />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Year {year}</Card.Meta>
        <Card.Description>
            {texts.map((text, i) => (
                <Label key={i} color={color}>{text}</Label>
            ))}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='linkify' />
        15 Links
      </Card.Content>
    </Card>
  );
};
