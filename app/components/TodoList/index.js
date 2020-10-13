/**
 *
 * TodoList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingIndicator from 'components/LoadingIndicator';
import Todo from '../Todo';
import { wrapperStyles, ulStyles } from './styles';

const StyledWrapper = styled.div`
  ${wrapperStyles};
`;

const StyledUl = styled.ul`
  ${ulStyles};
`;

function TodoList({ todos, loading, error, onToggleTodo }) {
  /* Render indicator while loading  */
  if (loading) {
    return (
      <StyledWrapper>
        <LoadingIndicator />
      </StyledWrapper>
    );
  }

  /* Render message on error */
  if (error) {
    return (
      <StyledWrapper>
        <StyledUl>
          <li>{error}</li>
        </StyledUl>
      </StyledWrapper>
    );
  }

  /* Render todo list */
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
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
