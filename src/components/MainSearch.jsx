import React from 'react'
import { Header, Input } from 'semantic-ui-react';

const MainSearch = () => {
    return (
        <>
            <Header as="h1">A Collection of Links for Your Sermon Prep</Header>
            <Input fluid icon="search" iconPosition="left" placeholder="Filter by Sunday or Holy Day..."/>
        </>
    )
}

export default MainSearch;
