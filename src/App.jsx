import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const initialFeedbackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackList, setFeedbackList] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feedback"));
    return savedData || initialFeedbackState;
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackList((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackList(initialFeedbackState);
  };

  const totalFeedback =
    feedbackList.good + feedbackList.neutral + feedbackList.bad;
  const positiveFeedback = totalFeedback
    ? ((feedbackList.good / totalFeedback) * 100).toFixed(2)
    : 0;

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedbackList));
  }, [feedbackList]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackList={feedbackList}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default App;
