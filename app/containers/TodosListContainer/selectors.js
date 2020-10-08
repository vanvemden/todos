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

/**
 * Default selector used by TodosListContainer
 */

const makeSelectTodosListContainer = () =>
  createSelector(
    selectTodosListContainerDomain,
    substate => substate,
  );

export default makeSelectTodosListContainer;
export { selectTodosListContainerDomain };
