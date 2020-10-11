import { css } from 'styled-components';

export const wrapperStyles = css`
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const ulStyles = css`
  list-style: none;
  margin: 0;
  width: 100%;
  max-height: 30em;
  overflow-y: auto;
  padding: 0 1em;
`;

export default [wrapperStyles, ulStyles];
