import { css } from 'styled-components';

const checkboxContainerStyles = css`
  display: inline-block;
  vertical-align: middle;
  margin-right: 1em;
`;

const iconStyles = css`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const hiddenCheckboxStyles = css`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const styledCheckboxStyles = css`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
  color: ${props => (props.checked ? 'salmon' : 'papayawhip')};
  transition: all 150ms;
`;

export {
  checkboxContainerStyles,
  iconStyles,
  hiddenCheckboxStyles,
  styledCheckboxStyles,
};
