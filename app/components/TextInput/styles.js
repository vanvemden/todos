import { css } from 'styled-components';

const inputStyles = css`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px dashed #b4b4b2;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const errorStyles = css`
  display: block;
  padding: 0.375rem 0.75rem 0;
  margin-top: 4px;
  font-size: 0.9rem;
  line-height: 1;
  color: red;
`;

export { inputStyles, errorStyles };
