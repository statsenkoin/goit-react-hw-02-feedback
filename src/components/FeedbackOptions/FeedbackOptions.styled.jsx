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
  border: 1px solid #3acdcd;
  border-radius: 8px;
  transition: 300ms;
  cursor: pointer;

  background-color: ${({ id }) => {
    switch (id) {
      case 'good':
        return '#6cc853';
      case 'neutral':
        return '#f9dc38';
      case 'bad':
        return '#fe5744';
      default:
        return '#3acdcd';
    }
  }};

  &:hover {
    scale: 1.1;

    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
      rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;
