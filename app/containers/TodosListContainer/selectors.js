import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the todosListContainer state domain
 */

const selectTodosListContainerDomain = state =>
  state.todosListContainer || initialState;

/**
 * Other specific selectors
 */

const makeSelectTodos = () =>
  createSelector(
    selectTodosListContainerDomain,
    substate => substate.todos,
  );

/**
 * Default selector
 */

const makeSelectTodosListContainer = () =>
  createSelector(
    selectTodosListContainerDomain,
    substate => substate,
  );

export default makeSelectTodosListContainer;
export { makeSelectTodos, selectTodosListContainerDomain };
