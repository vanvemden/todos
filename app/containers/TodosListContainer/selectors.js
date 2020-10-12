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

const makeSelectTodosCount = () =>
  createSelector(
    selectTodosListContainerDomain,
    substate => substate.todos.filter(todo => !todo.checked).length,
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
export {
  makeSelectTodos,
  makeSelectTodosCount,
  selectTodosListContainerDomain,
};
