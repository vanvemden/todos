/**
 *
 * Alert
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAlert = styled.div`
  width: 100%;
  display: inline-flex;
  line-height: 1.5em;
  font-size: 1.5em;
  margin: 0.75em 0.75em 0 0;
  padding: 0.25em 1em;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: dashed;
  background-color: ${props => props.bgColor};
`;

function Alert({ text, bgColor }) {
  return <StyledAlert bgColor={bgColor}>{text}</StyledAlert>;
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Alert;
