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

function Form(props, { onSubmit }) {
  return <StyledForm onSubmit={onSubmit}>{props.children}</StyledForm>;
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default Form;
