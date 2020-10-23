/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 10px;
  padding: 25px;
  border: 1px dashed #b4b4b2;
  background-color: #b3d4fc;
  border-radius: 0.25rem;
`;

function Form({ onSubmit, children }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default Form;
