import { Link } from 'react-router-dom';

import { Card, Icon, Image, Label } from 'semantic-ui-react';

export const DayCard = ({ day: { id, name, years, texts, color = 'teal' } }) => {
  let basic = false;
  if (color === "white"){
    color = "black";
    basic = true;
  }

  return (
    <Card
      color={color}
      as={Link}
      to={'/day/'+id}
    >
      <Image />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{`Year ${years}`}</Card.Meta>
        <Card.Description>
            {texts.map((text, i) => (
                <Label key={i} color={color} basic={basic}>{text}</Label>
            ))}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='linkify' />
        Links
      </Card.Content>
    </Card>
  );
};
