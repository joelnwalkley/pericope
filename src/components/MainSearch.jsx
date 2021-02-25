import React from 'react'
import { Container, Header, Input } from 'semantic-ui-react';

const MainSearch = () => {
    return (
        <Container className="hero" textAlign="center">
            <Header as="h1">A Collection of Links for Your Sermon Prep</Header>
            <Input fluid icon="search" iconPosition="left" placeholder="Filter by Sunday, Season, or Holy Day..."/>
        </Container>
    )
}

export default MainSearch;
