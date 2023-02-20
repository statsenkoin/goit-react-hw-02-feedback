import React from 'react';
// import { Title, ButtonPlate } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map(key => {
        return (
          <li key={key}>
            <button type="button" id={key} onClick={onLeaveFeedback}>
              {options[key]}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { FeedbackOptions };
