import { css } from 'styled-components';

export const liStyles = css`
  min-height: 3em;
  display: flex;
  align-items: center;
  margin: 1em 0;
  padding: 1em;
  border-radius: 0.25rem;
  border: 1px dashed #b4b4b2;
  background-color: #b3d4fc;
`;

export const labelStyles = css`
  font-size: 1.25em;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;

export default [liStyles, labelStyles];
