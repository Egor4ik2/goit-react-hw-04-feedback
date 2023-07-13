import React, { useState, useEffect } from 'react';
import './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  const calculatePositivePercentage = () => {
    if (total === 0) {
      return 0;
    }
    return ((good / total) * 100).toFixed(2);
  };

  return (
    <div>
      {total > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {calculatePositivePercentage()}%</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
