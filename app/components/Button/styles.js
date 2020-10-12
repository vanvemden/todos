import { css } from 'styled-components';

const buttonStyles = css`
  background-color: #ffffff;
  color: #000000;
  display: inline-flex;
  line-height: 1em;
  font-size: 1.25em;
  margin: 0.75em 0.75em 0 0;
  padding: 0.25em 1em;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: dashed;
  border-color: ${props => props.bgColor};
  cursor: pointer;
`;

export default buttonStyles;
