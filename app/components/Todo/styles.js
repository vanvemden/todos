import { css } from 'styled-components';

export const liStyles = css`
  min-height: 3em;
  display: flex;
  align-items: center;
  margin: 1em 0;
  padding: 0.5em 1em;
  border: 2px dashed #fff;
`;

export const labelStyles = css`
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;

export default [liStyles, labelStyles];
