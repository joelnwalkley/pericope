import {
  Button,
  Container,
  Dropdown,
  Form,
  Header,
  Message,
} from 'semantic-ui-react';

import { user } from '../data/user';
import { days } from '../data/days';

const dayOptions = days.map((day) => ({
  key: day.id,
  text: `${day.name} (${day.years})`,
  value: day.id,
}));

const allTexts = [];
days.forEach((day) => {
  day.texts.forEach((text) => {
    allTexts.push(text);
  });
});
const uniqueTexts = [...new Set(allTexts)];
uniqueTexts.sort();
const readingOptions = uniqueTexts.map((reading) => ({
  key: reading,
  text: reading,
  value: reading,
}));

export const SubmitLink = () => {
  return (
    <Container className='hero'>
      <Header as='h1' textAlign='center'>
        Submit New Sermon Link
      </Header>
      {user.roles.submit ? (
        <Form
          autoComplete='off'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Input
            label='URL'
            type='url'
            name='url'
            placeholder='https://www.example.com'
            pattern='https://.*'
            required
          />
          <Form.Input
            label='Title'
            type='text'
            name='title'
            placeholder='Example Commentary on Romans 8'
            required
          />
          <Form.Input
            label='Publisher'
            type='text'
            name='publisher'
            placeholder='Examples: Working Preacher, Pulpit Fiction'
            required
          />
          <Form.Field required>
            <label>Liturgical Day</label>
            <Dropdown
              multiple
              selection
              fluid
              search
              placeholder='Examples: Lent1B, Proper5B, Easter'
              options={dayOptions}
            />
          </Form.Field>
          <Form.Field>
            <label>Readings (Optional)</label>
            <Dropdown
              multiple
              selection
              fluid
              search
              placeholder='Examples: Gen 1:1-2:2, John 3:1-17'
              options={readingOptions}
            />
          </Form.Field>
          <Message positive>
            <Message.Header>Success</Message.Header>
            Thanks! Your submission has been received. It will appear in the
            search results after it is approved by a reviewer.
          </Message>
          <Message negative>
            <Message.Header>Error</Message.Header>
            Sorry, something went wrong.
          </Message>
          <Button color='teal' type='submit'>
            Submit
          </Button>
        </Form>
      ) : (
        <Message info>
          <Message.Header>Permission Needed</Message.Header>
          At this time only a limited number of users are permitted to submit
          new links. Check again later for this feature to be more widely
          available.
        </Message>
      )}
    </Container>
  );
};
