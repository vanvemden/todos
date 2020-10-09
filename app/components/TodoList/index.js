/**
 *
 * TodoList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Todo from '../Todo';
import Wrapper from './Wrapper';
import Ul from './Ul';

function TodoList({ todos, onToggleTodo }) {
  const todoNodes = todos.map(todo => (
    <Todo key={todo.id} todo={todo} onToggle={onToggleTodo} />
  ));

  return (
    <Wrapper>
      <Ul>{todoNodes}</Ul>
    </Wrapper>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
