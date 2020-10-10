import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the todoFormContainer state domain
 */

const selectTodoFormContainerDomain = state =>
  state.todoFormContainer || initialState;

/**
 * Other specific selectors
 */

const makeSelectTodoText = () =>
  createSelector(
    selectTodoFormContainerDomain,
    substate => substate.text,
  )

/**
 * Default selector used by TodoFormContainer
 */

const makeSelectTodoFormContainer = () =>
  createSelector(
    selectTodoFormContainerDomain,
    substate => substate,
  );

export default makeSelectTodoFormContainer;
export { selectTodoFormContainerDomain, makeSelectTodoText };
