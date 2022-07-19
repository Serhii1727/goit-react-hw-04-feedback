import React from "react";
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics';
import Notification from "./Notification";
import Section from './Section';
import { Container } from './App.styled'


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleChange = (e) => {
    const name = e.currentTarget.value;
    this.setState(prevSate => ({
      [name]: prevSate[name] + 1
    }))
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    let percentage = this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad)
    return percentage.toFixed(0)
  }

  render() {
    const { good, neutral, bad } = this.state
    return (
      <Container className="Container">
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleChange}
          />
        </Section>
        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          /> : <Notification message="There is no feedback" />}

        </Section>
      </Container>
    )
  }
}