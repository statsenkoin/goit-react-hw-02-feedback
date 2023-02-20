import styled from 'styled-components';

export const OptionList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
`;

export const Option = styled.button`
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
