import React from 'react';
import PropTypes from 'prop-types';
import { Option, OptionList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionList>
      {Object.keys(options).map(key => {
        return (
          <li key={key}>
            <Option type="button" id={key} onClick={onLeaveFeedback}>
              {options[key]}
            </Option>
          </li>
        );
      })}
    </OptionList>
  );
};

export { FeedbackOptions };

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
