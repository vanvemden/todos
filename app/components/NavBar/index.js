/**
 *
 * NavBar
 *
 */

import React from 'react';
import styled from 'styled-components';
import NavLink from '../NavLink';

import messages from './messages';
import navBarStyles from './styles';

const StyledNavBar = styled.div`
  ${navBarStyles};
`;

function NavBar() {
  return (
    <StyledNavBar>
      <NavLink to="/todos/add" message={messages.navAddTodo} />
      <NavLink to="/todos" message={messages.navTodoList} />
    </StyledNavBar>
  );
}

export default NavBar;
