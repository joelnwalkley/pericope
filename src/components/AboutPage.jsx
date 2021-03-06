import React from 'react';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

export const AboutPage = () => {
  return (
    <Container text>
      <Header as='h2'>Goal & Vision</Header>
      <p>
        Pericope is a searchable directory of online commentaries to help
        preachers prepare for the worship experience through thoughtful study of
        the texts.
      </p>
      <p>
        <b>pe·ric·o·pe /pəˈrikəpē/</b>
        <br />
        Pericope, form the Greek περικοπή "cutting around", refers to portions
        of scripture specifically selected for public worship services
        especially in more liturgical traditions. I have known many folks refer
        to the sermon preparation groups I've participated in as "pericope
        study."
      </p>
      <p>
        It may also share some etymology with the word *paragraph*, which is why
        I choose the current simple logo: ¶.
      </p>
      <p>
        Of course, this project stands on the shoulders of giants. It was
        inspired by works like the wonderful{' '}
        <a href='http://www.textweek.com/' target='_blank' rel='noreferrer'>
          Text Week
        </a>
        .
      </p>
      <p>
        What sets this project apart is the aspect of community-supported
        directory maintenance. This includes a team of folks who submit links
        and "upvotes" on the most helpful links.
      </p>
      <p>
        Currently, the site includes only a few days in The Revised Common
        Lectionary Year B, and the group of submitters/reviewers is
        intentionally small. This will help to ensure smooth functionality as
        the directory grows.
      </p>
      <hr />
      <Header as='h2'>About The Developer</Header>
      <p>
        My name is Joel N. Walkley and I am an ordained United Church of Christ
        pastor in the Shenandoah Valley of Virginia. I work bi-vocationally as a
        software developer. In addition to my seminary training I also hold a
        Masters of Social Work degree.
      </p>
      <p>
        I built this project, in part, to fulfill a need for myself and other
        pastors. It also serves as an item in my professional portfolio.
      </p>
      <p>
        You can reach me by email at{' '}
        <a href='mailto:joelnwalkley@gmail.com'>joelnwalkley@gmail.com</a>.
        Although I am not currently seeking employment, I am open to explore new
        opportunities especially if they can more intentionally blend my calling
        & skills as a pastor, social worker, and software developer.
      </p>
      <p>
        Or, who knows, maybe Pericope could become a full-time job{' '}
        <span role='img'>😉</span> if enough people...{' '}
        <a
          href='https://www.buymeacoffee.com/pericope'
          target='_blank'
          rel='noreferrer'
        >
          "buy me a coffee"
        </a>
        .
      </p>
      <hr />
      <Header as='h2'>Contributing</Header>
      <Header as='h3'>Prayer</Header>
      <p>
        I'd be honored if everyone who visits this site remembers me in their
        prayers.
      </p>
      <Header as='h3'>Development</Header>
      <p>You can find this open-source project at github</p>
      <Icon name='github' />
      <a
        href='https://github.com/joelnwalkley/pericope'
        target='_blank'
        rel='noreferrer'
      >
        https://github.com/joelnwalkley/pericope
      </a>
      <Header as='h3'>Link Maintenance</Header>
      <p>
        As the site and community grows, there will be an increased need for
        submitters, reviewers, moderators, and other roles. I will make
        announcements regarding these opportunities.
      </p>
      <Header as='h3'>Financial Support</Header>
      <p>
        I anticipate there will be costs associated with this web app including
        hosting and cloud computing.
      </p>
      
        <Container textAlign='center'>
          <Button
            color='teal'
            href='https://www.buymeacoffee.com/pericope'
            target='_blank'
            rel='noreferrer'
          >
            <Icon name='coffee'></Icon>
            Buy Me A Coffee
          </Button>
        </Container>
      
      <p>I am also open to speaking with page sponsors.</p>
    </Container>
  );
};
