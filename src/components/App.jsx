import ReviewsVidget from "./ReviewsVidget";

export const App = () => {
  return <div>
    <ReviewsVidget
      initialValueFeedbackGood={0}
      initialValueFeedbackNeutral={0}
      initialValueFeedbackBad={0}
    />
  </div>
};
