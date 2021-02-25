import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { DayCard } from './DayCard';

import { days } from '../../data/days';

export const DayGroup = () => {
  return (
    <Container className='hero'>
      <Card.Group itemsPerRow={3}>
        {days.map((day, index) => (
          <DayCard key={index} day={day} />
        ))}
      </Card.Group>
    </Container>
  );
};
