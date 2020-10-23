/**
 *
 * NavBar
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import messages from './messages';

import NavLink from '../NavLink';

const StyledNavBar = styled.div`
  text-align: center;
`;

function NavBar({ todoCount }) {
  return (
    <StyledNavBar>
      <NavLink to="/todos/add" message={messages.navAddTodo} />
      <NavLink
        to="/todos"
        message={messages.navTodoList}
        messageValues={{ todoCount }}
      />
    </StyledNavBar>
  );
}

NavBar.propTypes = {
  todoCount: PropTypes.number.isRequired,
};

export default NavBar;
