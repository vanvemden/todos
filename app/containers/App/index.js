/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import TodosListContainer from 'containers/TodosListContainer/Loadable';
import TodoFormContainer from 'containers/TodoFormContainer/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import appStyles from './styles';

import NavBar from '../../components/NavBar';

import { makeSelectTodosCount } from '../TodosListContainer/selectors';

const StyledWrapper = styled.div`
  ${appStyles};
`;

export function App({ todoCount }) {
  return (
    <StyledWrapper>
      <NavBar todoCount={todoCount} />
      <Switch>
        <Route exact path="/todos" component={TodosListContainer} />
        <Route exact path="/todos/add" component={TodoFormContainer} />
        <Route exact path="/">
          <Redirect to="/todos" />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </StyledWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  todoCount: makeSelectTodosCount(),
});

App.propTypes = {
  todoCount: PropTypes.number.isRequired,
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);
