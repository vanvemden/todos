import { css } from 'styled-components';

const alertStyles = css`
  width: 100%;
  display: inline-flex;
  line-height: 1.5em;
  font-size: 1.5em;
  margin: 0.75em 0.75em 0 0;
  padding: 0.25em 1em;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: dashed;
  background-color: ${props => props.bgColor};
`;

export default alertStyles;
