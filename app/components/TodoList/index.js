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

function TodoList({ todos }) {
  const todoNodes = todos.map(todo => <Todo key={todo.id} todo={todo} />);

  return (
    <Wrapper>
      <Ul>{todoNodes}</Ul>
    </Wrapper>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
