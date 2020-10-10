/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import inputStyles from './styles';

const StyledInput = styled.input`
  ${inputStyles};
`;

function TextInput({ placeholder, onChange, value, type, id }) {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      id={id}
    />
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default TextInput;
