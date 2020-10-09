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

function Todo({ todo }) {
  const onCheckboxChange = (id) => {
    console.log('checkbox changed', id);
  };

  return (
    <Wrapper>
      <Checkbox
        checked={todo.checked}
        onChange={() => onCheckboxChange(todo.id)}
        id={todo.id}
      />
      <Label>{todo.text}</Label>
    </Wrapper>
  );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
