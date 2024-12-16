const Feedback = ({ feedbackList, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul>
        <li>Good: {feedbackList.good}</li>
        <li>Neutral: {feedbackList.neutral}</li>
        <li>Bad: {feedbackList.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </>
  );
};

export default Feedback;
