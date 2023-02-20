import React from 'react';
import { Stats, Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Stats>
      <Item>
        <span>Good:</span>
        <span>{good}&nbsp;</span>
      </Item>
      <Item>
        <span>Neutral:</span>
        <span>{neutral}&nbsp;</span>
      </Item>
      <Item>
        <span>Bad:</span>
        <span>{bad}&nbsp;</span>
      </Item>
      <Item>
        <span>Total:</span>
        <span>{total}&nbsp;</span>
      </Item>
      <Item>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </Item>
    </Stats>
  );
};

export { Statistics };
