import { useContext, useState } from 'react';
import { FirebaseUser, db } from '../util/firebaseInit';
import axios from 'axios';

import {
  Button,
  Container,
  Dropdown,
  Form,
  Header,
  Icon,
  Message,
} from 'semantic-ui-react';

import { dayOptions, readingOptions, dayTexts } from '../data/days';
import {
  validateAllLinkFields,
  sanitizeURL,
  validateSingleLinkField,
} from '../util/validators';

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
  const [linkInfoLoading, setLinkInfoLoading] = useState(false);

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
          userID: user?.uid, //uid is anonymized. since the links collection will be public do not include names and emails.
        },
        review: {
          date: user?.roles?.review ? new Date() : '',
          userID: user?.roles?.review ? user.uid : '',
          approved: user?.roles?.review ? true : false, //if submitter has review role, automatically approve
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
      ...submitErrors,
    });
  };

  const handleURLChange = (e) => {
    const url = e.target.value;
    setLinkInfoLoading(url === '' ? false : true);
    setFormErrors({
      ...formErrors,
      url: false,
      exists: false,
      urlFormat: false,
    });
    setLinkInfo({
      ...linkInfo,
      url: url,
    });
    if (url !== '') {
      //add more validation first
      axios
        .post(
          'http://localhost:5001/sermonlinks-8a00d/us-central1/api1/linkinfo',
          {
            url: url,
          }
        )
        .then(function (response) {
          console.log('response', response);
          const { title, siteName } = response.data;
          setLinkInfo({
            ...linkInfo,
            url: url,
            title: title,
            publisher: siteName,
          });
          setLinkInfoLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handelDayChange = (e, data) => {
    const texts = dayTexts(data.value);
    setFormErrors({
      ...formErrors,
      days: false,
    });
    setLinkInfo({
      ...linkInfo,
      days: data.value,
      texts: texts,
    });
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
  };

  return (
    <Container className='hero'>
      <Header as='h1' textAlign='center'>
        Submit New Commentary Link
      </Header>
      {user?.roles?.submit ? (
        <Form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <Form.Input
            label='URL (Copy/Paste)'
            type='url'
            name='url'
            value={linkInfo.url}
            onChange={handleURLChange}
            placeholder='https://www.example.com'
            pattern='https://.*'
            required
            error={formErrors.url}
          />
          {linkInfo.url === '' && (
            <Message info>
              Copy and paste a link above, then wait for the fields to load
              below.
            </Message>
          )}
          {linkInfoLoading && (
            <Message icon>
              <Icon name='circle notched' loading />
              <Message.Content>
                <Message.Header>Getting Link Info</Message.Header>
                One moment...
              </Message.Content>
            </Message>
          )}
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
            disabled={linkInfo.url === ''}
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
            disabled={linkInfo.url === ''}
          />
          <Form.Field
            required
            error={formErrors.days}
            disabled={linkInfo.url === ''}
          >
            <label>Liturgical Day</label>
            <Dropdown
              name='days'
              value={linkInfo.days}
              onChange={handelDayChange}
              onBlur={validateOnBlur}
              multiple
              selection
              fluid
              search
              placeholder='Examples: Lent1B, Proper5B, Easter'
              options={dayOptions}
            />
          </Form.Field>
          <Form.Field disabled={linkInfo.url === ''}>
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
              <p>
                The form has been cleared. You may continue to add more links.
              </p>
            </Message>
          )}
          {submitMessage.type === 'error' && (
            <Message negative>
              <Message.Header>Error</Message.Header>
              {submitMessage.err}
            </Message>
          )}

          <Button color='teal' type='submit' disabled={linkInfo.url === ''}>
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
