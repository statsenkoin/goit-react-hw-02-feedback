import React from 'react';
import { Title, StatsItem } from './Statistics.styled';

const Statistics = () => {
  return (
    <>
      <Title>Statistics</Title>
      <StatsItem>Good: </StatsItem>
      <StatsItem>Neutral: </StatsItem>
      <StatsItem>Bad: </StatsItem>
      <StatsItem>Total: </StatsItem>
      <StatsItem>Positive feedback: </StatsItem>
    </>
  );
};

export { Statistics };
