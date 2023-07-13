
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
const [selectedOption, setSelectedOption] = useState(null);

const handleOptionClick = (option) => {
setSelectedOption(option);
onLeaveFeedback(option);
};

return (
<div>
{options.map((option) => (
<button
key={option}
onClick={() => handleOptionClick(option)}
className={option === selectedOption ? 'selected' : ''}
>
{option}
</button>
))}
</div>
);
};

FeedbackOptions.propTypes = {
options: PropTypes.arrayOf(PropTypes.string).isRequired,
onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;