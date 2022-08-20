import { useState } from "react";
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics';
import Notification from "./Notification";
import Section from './Section';
import { Container } from './App.styled'


export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = (e) => {
    const name = e.currentTarget.value;
    switch (name) {
      case "good":
        setGood(good + 1)
        break;
      case "neutral":
        setNeutral(neutral + 1)
        break;
      case "bad":
        setBad(bad + 1)
        break;

      default:
        return;
    }
  }
  const totalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    let percentage = good * 100 / (totalFeedback())
    return percentage.toFixed(0)
  }

  return (
    <Container className="Container">
      <Section title="Please leave feadback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleChange}
        />
      </Section>
      <Section title="Statistics">
        {good > 0 || neutral > 0 || bad > 0 ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        /> : <Notification message="There is no feedback" />}
      </Section>
    </Container >
  )
}
