/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import buttonStyles from './styles';

const StyledButton = styled.button`
  ${buttonStyles};
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
