/**
 *
 * TodoList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Todo from '../Todo';
import { wrapperStyles, ulStyles } from './styles';

const StyledWrapper = styled.div`
  ${wrapperStyles};
`;

const StyledUl = styled.ul`
  ${ulStyles};
`;

function TodoList({ todos, onToggleTodo }) {
  const todoNodes = todos.map(todo => (
    <Todo key={todo.id} todo={todo} onToggle={onToggleTodo} />
  ));

  return (
    <StyledWrapper>
      <StyledUl>{todoNodes}</StyledUl>
    </StyledWrapper>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
