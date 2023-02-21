import styled from 'styled-components';

export const OptionList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding-left: 0;
  padding-bottom: 20px;
  margin: 20px 0 0 0;

  border-bottom: 1px solid #3acdcd;
`;

export const Option = styled.li`
  width: 100px;
  padding: 5px;
  font-size: 18px;
  font-weight: 600;
  background-color: #b0fefe;
  border: 1px solid #3acdcd;
  border-radius: 8px;

  &:hover {
    background-color: #96f1f1;
    scale: 1.1;
  }
`;
