import { Button, Container, Dropdown, Form, Header, Message } from 'semantic-ui-react';

import {user} from '../data/user';

const options = [//sample from Semantic UI
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ]



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
              placeholder="Example Commentary on Romans 8"
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
              placeholder="Examples: Lent1B, Proper5B, Easter"
              options={options} 
          />
          </Form.Field>
          <Form.Field>
              <label>Readings (Optional)</label>
              <Dropdown
              multiple
              selection
              fluid
              search
              placeholder="Examples: Gen 1:1-2:2, John 3:1-17"
              options={options} 
          />
          </Form.Field>
          <Message positive>
          <Message.Header>Success</Message.Header>
          Thanks! Your submission has been received. It will appear in the search results after it is approved by a reviewer.
          </Message>
          <Message negative>
              <Message.Header>Error</Message.Header>
              Sorry, something went wrong.
          </Message>
          <Button color="teal" type="submit">Submit</Button>
        </Form>
      ) : (
        <Message info>
          <Message.Header>Permission Needed</Message.Header>
          At this time only a limited number of users are permitted to submit new links. Check again later for this feature to be more widely available.
      </Message>
      )}
      
    </Container>
  );
};
