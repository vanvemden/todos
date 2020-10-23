/**
 *
 * Todo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '../Checkbox';

const StyledLi = styled.li`
  min-height: 3em;
  display: flex;
  align-items: center;
  margin: 1em 0;
  padding: 1em;
  border-radius: 0.25rem;
  border: 1px dashed #b4b4b2;
  background-color: #b3d4fc;
`;

const StyledLabel = styled.div`
  font-size: 1.25em;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
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
