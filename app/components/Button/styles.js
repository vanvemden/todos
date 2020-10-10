import { css } from 'styled-components';

const buttonStyles = css`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${props => props.bgColor};
`;

export default buttonStyles;
