/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: #424147;
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

  &:hover {
    background-color: #ffffff;
  }
`;

function Button({ message, bgColor, onClick }) {
  return (
    <StyledButton bgColor={bgColor} onClick={onClick}>
      <FormattedMessage {...message} />
    </StyledButton>
  );
}

Button.propTypes = {
  message: PropTypes.object.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
