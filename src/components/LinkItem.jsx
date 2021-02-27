import { Button, Icon, Item, Label } from 'semantic-ui-react';

export const LinkItem = ({
  link: { url, title, publisher, readings, votes = [] },
}) => {
  return (
    <Item>
      <Item.Image as='div'>
        <Button as='div' labelPosition='right'>
          <Button color='teal'>
            <Icon name='arrow alternate circle up' />
            Votes
          </Button>
          <Label as='a' basic color='teal' pointing='left'>
            {votes}
          </Label>
        </Button>
      </Item.Image>

      <Item.Content>
        <Item.Header as='a'>{title}</Item.Header>
        <Item.Description>{publisher}</Item.Description>
        <Item.Meta>{url}</Item.Meta>
        <Item.Extra>
          {readings.map((reading, i) => (
            <Label key={i}>{reading}</Label>
          ))}
        </Item.Extra>
      </Item.Content>
      {/* To implement reporting
      <Popup content='Report Link' position='left center' trigger={<Icon name='flag outline'/>}/> */}
    </Item>
  );
};
