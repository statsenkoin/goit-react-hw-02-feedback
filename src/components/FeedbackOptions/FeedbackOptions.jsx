import React from 'react';
// import { Title, ButtonPlate } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            id={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}

      {/* <button type="button" id="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" id="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" id="bad" onClick={onLeaveFeedback}>
        Bad
      </button> */}
    </>
  );
};

export { FeedbackOptions };
