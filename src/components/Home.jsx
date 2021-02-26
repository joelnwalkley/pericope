import React, { useState } from 'react';
import { Card, Container, Header, Input } from 'semantic-ui-react';

import { days } from '../data/days';
import { DayCard } from './Days/DayCard';

export const Home = () => {
  const [showDays, setShowDays] = useState([...days]);

  const filterDays = (e) => {
    const searchTerm = new RegExp(e.target.value, 'i');
    const filteredDays = days.filter((day) => {
      const textCheck =  day.texts.some(text => searchTerm.test(text));
      return (
        searchTerm.test(day.name) ||
        searchTerm.test(day.id) ||
        searchTerm.test(day.season) ||
        textCheck
      );
    });
    setShowDays([...filteredDays]);
  };

  return (
    <>
    <Container className='hero' textAlign='center'>
      <Header as='h1'>A Collection of Links for Your Sermon Prep</Header>
      <Input
        fluid
        icon='search'
        iconPosition='left'
        placeholder='Filter by Sunday, Holy Day, or Text...'
        onKeyUp={filterDays}
      />
      <Container className='hero'>
        <Card.Group centered>
          {showDays.map((day, index) => (
            <DayCard key={index} day={day} />
          ))}
        </Card.Group>
      </Container>
    </Container>
    </>
  );
};
