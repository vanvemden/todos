/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
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

const StyledError = styled.div`
  display: block;
  padding: 0.375rem 0.75rem 0;
  margin-top: 4px;
  font-size: 0.9rem;
  line-height: 1;
  color: red;
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
