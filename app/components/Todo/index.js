/**
 *
 * Todo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import TodoText from './TodoText';
import TodoStatus from './TodoStatus';
// import styled from 'styled-components';

function Todo({ todo }) {
  return (
    <Wrapper>
      <TodoText>{todo.text}</TodoText>
      <TodoStatus>{todo.done}</TodoStatus>
    </Wrapper>
  );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
