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

      {/* {options.map(option => {
         return (
           <li key={option}>
             <button type="button" id={option} onClick={onLeaveFeedback}>
               {option}
             </button>
           </li>
         );
       })} */}

      {/* <button type="button" id="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" id="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" id="bad" onClick={onLeaveFeedback}>
        Bad
      </button> */}
    </ul>
  );
};

export { FeedbackOptions };
