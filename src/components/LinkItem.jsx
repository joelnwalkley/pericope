import { Header, Item, Label } from 'semantic-ui-react';

import { Votes } from './Votes';

export const LinkItem = ({
  link: { uid, url, title, publisher, texts, votes },
}) => {

  return (
    <Item>
      <Item.Image as='div'>
        <Votes voteCount={votes} linkUID={uid}/>
      </Item.Image>

      <Item.Content href={url} target="_blank">
        <Header as='h3'>{title}
        <Header.Subheader>{publisher}</Header.Subheader>
        </Header>
        <Item.Meta>{url}</Item.Meta>
        <Item.Extra>
          {texts.map((text, i) => (
            <Label key={i}>{text}</Label>
          ))}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};
