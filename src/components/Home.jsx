import React from 'react'
import { Container } from 'semantic-ui-react'
import MainSearch from './MainSearch'
import { DayGroup } from './Days/DayGroup'

export const Home = () => {
    return (
        <Container className="hero" textAlign="center">
            <MainSearch/>
            <DayGroup/>
        </Container>
    )
}
