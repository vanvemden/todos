/**
 *
 * Todo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '../Checkbox';
import { liStyles, labelStyles } from './styles';

const StyledLi = styled.li`
  ${liStyles};
`;

const StyledLabel = styled.div`
  ${labelStyles};
`;
function Todo({ todo, onToggle }) {
  return (
    <StyledLi>
      <Checkbox
        id={todo.id}
        checked={todo.checked}
        onChange={() => onToggle(todo.id)}
      />
      <StyledLabel checked={todo.checked}>{todo.text}</StyledLabel>
    </StyledLi>
  );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Todo;
