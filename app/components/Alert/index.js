/**
 *
 * Alert
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import alertStyles from './styles';

const StyledAlert = styled.div`
  ${alertStyles};
`;

function Alert({ text, bgColor }) {
  return <StyledAlert bgColor={bgColor}>{text}</StyledAlert>;
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Alert;
