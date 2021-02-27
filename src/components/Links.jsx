import { Button, Icon, Item, Label } from 'semantic-ui-react';

export const Links = () => {
  return (
    <Item>
      <Item.Image as='div'>
        <Button as='div' labelPosition='right'>
          <Button color='teal'>
            <Icon name='arrow alternate circle up' />
            Votes
          </Button>
          <Label as='a' basic color='teal' pointing='left'>
            2,048
          </Label>
        </Button>
      </Item.Image>

      <Item.Content>
        <Item.Header as='a'>Commentary on Mark 8:31-38</Item.Header>
        <Item.Description>Working Preacher</Item.Description>
        <Item.Meta>
          https://www.workingpreacher.org/commentaries/revised-common-lectionary/second-sunday-in-lent-2/commentary-on-mark-831-38-5
        </Item.Meta>
        <Item.Extra>
          <Label>RCL</Label>
          <Label>Mark 8:31-38</Label>
          <Label>Lent2B</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};
