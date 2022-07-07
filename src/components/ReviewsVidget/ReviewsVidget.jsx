import React from "react";
import Controls from "./Controls";
import Statistics from "./Statistics";
import { Container } from './ReviewsVidget.styled.jsx'

class ReviewsVidget extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    render() {
        return (
            <Container className="Container">
                <Controls
                    title="Please leave feadback"
                />
                <Statistics
                    title="Statistics" />
            </Container>

        )
    }
}

export default ReviewsVidget;