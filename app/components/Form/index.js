/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formStyles from './styles';

const StyledForm = styled.form`
  ${formStyles};
`;

function Form({ onSubmit, children }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default Form;
