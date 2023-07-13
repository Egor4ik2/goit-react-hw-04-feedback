import React, { useState } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './section/Section';
import Notification from './notifications/Notification';
import './App.module.css';

export const App = () => {
const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

const handleFeedback = (selectedFeedback) => {
setFeedback((prevFeedback) => ({
...prevFeedback,
[selectedFeedback]: prevFeedback[selectedFeedback] + 1,
}));
};

const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

const countPositiveFeedbackPercentage = () => {
const percentage = (feedback.good / totalFeedback) * 100;
return totalFeedback > 0 ? Math.round(percentage).toString() : '0';
};

return (
<div>
<Section title="Feedback">
<FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={handleFeedback} />
</Section>
<Section title="Statistics">
{totalFeedback > 0 ? (
<Statistics
         good={feedback.good}
         neutral={feedback.neutral}
         bad={feedback.bad}
         total={totalFeedback}
         positivePercentage={countPositiveFeedbackPercentage()}
       />
) : (
<Notification message="There is no feedback" />
)}
</Section>
</div>
);
};

