import { Header, Item, Label } from 'semantic-ui-react';

import { Votes } from './Votes';

export const LinkItem = ({
  link: { uid, url, title, publisher, texts, votes, submit },
}) => {
  var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const submitDate = submit.date.toDate().toLocaleDateString('en-US', dateOptions);

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
        <Item.Extra>Submitted on {submitDate}</Item.Extra>
      </Item.Content>
    </Item>
  );
};
