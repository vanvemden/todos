/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import TodosListContainer from 'containers/TodosListContainer/Loadable';
import TodoFormContainer from 'containers/TodoFormContainer/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import appStyles from './styles';

import NavBar from '../../components/NavBar';

const StyledWrapper = styled.div`
  ${appStyles};
`;

export default function App() {
  return (
    <StyledWrapper>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={TodosListContainer} />
        <Route exact path="/todos/add" component={TodoFormContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </StyledWrapper>
  );
}
