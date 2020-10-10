// Source: https://codesandbox.io/s/yvp79r4251?file=/src/Checkbox.js:1250-1254
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  checkboxContainerStyles,
  iconStyles,
  hiddenCheckboxStyles,
  styledCheckboxStyles,
} from './styles';

const CheckboxContainer = styled.div`
  ${checkboxContainerStyles};
`;

const Icon = styled.svg`
  ${iconStyles};
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${hiddenCheckboxStyles};
`;

// TODO: How to solve these template literals nicely
const StyledCheckbox = styled.div`
  ${styledCheckboxStyles}
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 30px ${props => (props.checked ? 'pink' : 'LightGreen')};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Checkbox = ({ className, checked, id, ...props }) => (
  // the label element is required as it triggers the onChange event
  <label htmlFor={id}>
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} id={id} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  </label>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
