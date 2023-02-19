import React from 'react';
import { Title, ButtonPlate } from './FeedbackOptions.styled';

const FeedbackOptions = () => {
  return (
    <>
      <Title>Please leave feedback</Title>
      <ButtonPlate>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </ButtonPlate>
    </>
  );
};

export { FeedbackOptions };
