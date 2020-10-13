/**
 * Tests for TodosListContainer reducers
 */

import produce from 'immer';
import todosListContainerReducer from '../reducer';
import {
  requestTodos,
  requestTodosSucceeded,
  requestTodosFailed,
  toggleTodo,
  toggleTodoSucceeded,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('todosListContainerReducer', () => {
  let state;

  beforeEach(() => {
    /* Reset to initial state */
    state = {
      todos: [],
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(todosListContainerReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the requestTodos action correctly', () => {
    /* Action fires request for todos to api */
    const fixture = [];
    const expectedResult = produce(state, draft => {
      draft.todos = fixture;
    });

    expect(todosListContainerReducer(state, requestTodos())).toEqual(
      expectedResult,
    );
  });

  it('should handle the requestTodosSucceeded action correctly', () => {
    /* Action fired after successful todos request to api */
    const fixture = [{ id: '12345', text: 'Testing', checked: false }];
    const expectedResult = produce(state, draft => {
      draft.todos = fixture;
    });

    expect(
      todosListContainerReducer(state, requestTodosSucceeded(fixture)),
    ).toEqual(expectedResult);
  });

  it('should handle the requestTodosFailed action correctly', () => {
    /* Action fired after todos request to api failed */
    const fixture = 'Error message';
    const expectedResult = produce(state, draft => {
      draft.todos = [];
    });

    expect(
      todosListContainerReducer(state, requestTodosFailed(fixture)),
    ).toEqual(expectedResult);
  });

  it('should handle the toggleTodo action correctly', () => {
    /* Action fires api request to toggle todo checked boolean */
    const fixture = { id: '12345', text: 'Testing', checked: false };
    /* */
    const tempState = todosListContainerReducer(
      state,
      requestTodosSucceeded([fixture]),
    );
    const expectedResult = produce(state, draft => {
      draft.todos = [fixture];
    });

    expect(todosListContainerReducer(tempState, toggleTodo('12345'))).toEqual(
      expectedResult,
    );
  });

  it('should handle the toggleTodoSucceeded action correctly', () => {
    /* Action fired when api request to toggle todo was successful */
    const fixture = { id: '12345', text: 'Testing', checked: false };
    /* Temporary state has todos array with todo object */
    const tempState = todosListContainerReducer(
      state,
      requestTodosSucceeded([fixture]),
    );

    /* Expected result has checked boolean set to true */
    const expectedResult = produce(state, draft => {
      draft.todos = [{ ...fixture, checked: true }];
    });

    /* Temp.state is updated with todo object returned by api */
    expect(
      todosListContainerReducer(
        tempState,
        toggleTodoSucceeded({
          ...fixture,
          checked: true,
        }),
      ),
    ).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
