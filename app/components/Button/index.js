/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import buttonStyles from './styles';

const StyledButton = styled.button`
  ${buttonStyles};
`;

function Button({ label, bgColor, onClick }) {
  return <StyledButton bgColor={bgColor} onClick={onClick}>{label}</StyledButton>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
