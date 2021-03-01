import { useContext, useState } from 'react';
import { FirebaseUser, db } from '../util/firebaseInit';

import {
  Button,
  Container,
  Dropdown,
  Form,
  Header,
  Message,
} from 'semantic-ui-react';

import { dayOptions, readingOptions } from '../data/days';
import { validateAllLinkFields, sanitizeURL, validateSingleLinkField } from '../util/validators';

export const SubmitLink = () => {
  const user = useContext(FirebaseUser);
  const [linkInfo, setLinkInfo] = useState({
    url: '',
    title: '',
    publisher: '',
    days: [],
    texts: [],
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, title, publisher, days, texts } = linkInfo;
    const sanitizedURL = sanitizeURL(url);
    const submitErrors = await validateAllLinkFields(linkInfo);

    if (Object.keys(submitErrors).length > 0) {
      setFormErrors(submitErrors);
      setSubmitMessage({
        type: 'error',
        err:
          'There is missing or invalid information on the form. Please check your submission and try again.',
      });
      return;
    }

    const linkRef = db.collection('links').doc();
    linkRef
      .set({
        uid: linkRef.id,
        url: sanitizedURL, //ignore query params
        title,
        publisher,
        days,
        texts,
        votes: 0,
        submit: {
          date: new Date(),
          userID: user.uid, //uid is anonymized. since the links collection will be public do not include names and emails.
        },
        review: {
          date: user.roles.review ? new Date() : '',
          userID: user.roles.review ? user.uid : '',
          approved: user.roles.review ? true : false, //if submitter has review role, automatically approve
        },
      })
      .then(() => {
        setSubmitMessage({
          type: 'success',
        });
        clearForm();
      })
      .catch((err) => {
        console.log('ERROR: ', err);
        setSubmitMessage({
          type: 'error',
          err: err,
        });
      });
  };

  const validateOnBlur = async (e, data) => {
    const submitErrors = await validateSingleLinkField(e, data);
    setFormErrors({
      ...formErrors,
      ...submitErrors
    })
  }

  const clearForm = () => {
    setLinkInfo({
      url: '',
      title: '',
      publisher: '',
      days: [],
      texts: [],
    });
    setFormErrors({});
  }

  return (
    <Container className='hero'>
      <Header as='h1' textAlign='center'>
        Submit New Commentary Link
      </Header>
      {user?.roles?.submit ? (
        <Form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <Form.Input
            label='URL'
            type='url'
            name='url'
            value={linkInfo.url}
            onChange={(e) => {
              setFormErrors({
                ...formErrors,
                url: false,
                exists: false,
                urlFormat: false,
              });
              setLinkInfo({
                ...linkInfo,
                url: e.target.value,
              });
            }}
            onBlur={validateOnBlur}
            placeholder='https://www.example.com'
            pattern='https://.*'
            required
            error={formErrors.url}
          />
          {formErrors.exists && (
            <Message negative>This link has already been submitted.</Message>
          )}
          {formErrors.urlFormat && (
            <Message negative>
              Please be sure your link includes the "https://" or "http://"" at
              the beginning of the url.
            </Message>
          )}
          <Form.Input
            label='Title'
            type='text'
            name='title'
            value={linkInfo.title}
            onChange={(e) => {
              setFormErrors({
                ...formErrors,
                title: false,
              });
              setLinkInfo({
                ...linkInfo,
                title: e.target.value,
              });
            }}
            onBlur={validateOnBlur}
            placeholder='Example Commentary on Romans 8'
            required
            error={formErrors.title}
          />
          <Form.Input
            label='Publisher'
            type='text'
            name='publisher'
            value={linkInfo.publisher}
            onChange={(e) => {
              setFormErrors({
                ...formErrors,
                publisher: false,
              });
              setLinkInfo({
                ...linkInfo,
                publisher: e.target.value,
              });
            }}
            onBlur={validateOnBlur}
            placeholder='Examples: Working Preacher, Pulpit Fiction'
            required
            error={formErrors.publisher}
          />
          <Form.Field required error={formErrors.days}>
            <label>Liturgical Day</label>
            <Dropdown
              name='days'
              value={linkInfo.days}
              onChange={(e, data) => {
                setFormErrors({
                  ...formErrors,
                  days: false,
                })
                setLinkInfo({
                  ...linkInfo,
                  days: data.value,
                });
              }}
              onBlur={validateOnBlur}
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
              name='texts'
              value={linkInfo.texts}
              onChange={(e, data) =>
                setLinkInfo({
                  ...linkInfo,
                  texts: data.value,
                })
              }
              multiple
              selection
              fluid
              search
              placeholder='Examples: Gen 1:1-2:2, John 3:1-17'
              options={readingOptions}
            />
          </Form.Field>
          {submitMessage.type === 'success' && (
            <Message positive>
              <Message.Header>Success</Message.Header>
              <p>Thanks! Your submission has been received.</p>
              {user?.roles?.review ? (
                <p>
                  Because you are an approved reviewer, the link is immediately
                  available.
                </p>
              ) : (
                <p>
                  Your submission will be available after it is approved by a
                  reviewer.
                </p>
              )}
              <p>The form has been cleared. You may continue to add more links.</p>
            </Message>
          )}
          {submitMessage.type === 'error' && (
            <Message negative>
              <Message.Header>Error</Message.Header>
              {submitMessage.err}
            </Message>
          )}

          <Button color='teal' type='submit'>
            Submit
          </Button>
          <Button type='button' onClick={clearForm}>
            Clear Form
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
