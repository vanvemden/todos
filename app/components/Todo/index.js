/**
 *
 * Todo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Label from './Label';
import Checkbox from './Checkbox';
// import styled from 'styled-components';

function Todo({ todo, onToggle }) {

  return (
    <Wrapper>
      <Checkbox
        id={todo.id}
        checked={todo.checked}
        onChange={() => onToggle(todo.id)}
      />
      <Label checked={todo.checked}>{todo.text}</Label>
    </Wrapper>
  );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Todo;
