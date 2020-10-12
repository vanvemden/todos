/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inputStyles, errorStyles } from './styles';

const StyledInput = styled.input`
  ${inputStyles};
`;

const StyledError = styled.div`
  ${errorStyles};
`;

function TextInput({ placeholder, onChange, value, type, id, error }) {
  return (
    <>
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
        id={id}
      />
      <StyledError>{error}&nbsp;</StyledError>
    </>
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
