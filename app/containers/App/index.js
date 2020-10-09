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

import TodosListContainer from 'containers/TodosListContainer/Loadable';
import TodoFormContainer from 'containers/TodoFormContainer/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import Wrapper from './Wrapper';

export default function App() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={TodosListContainer} />
        <Route exact path="/todos/add" component={TodoFormContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Wrapper>
  );
}
