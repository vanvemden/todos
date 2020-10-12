import { css } from 'styled-components';

const navLinkStyles = css`
  background-color: #ffffff;
  color: #929898;
  display: inline-flex;
  line-height: 2em;
  font-size: 1.5em;
  margin: 0.75em;
  padding: 0.25em 1em;
  border: 1px dashed #b4b4b2;
  border-radius: 0.25rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #424147;
    border-color: #424147;
  }
`;

export default navLinkStyles;
