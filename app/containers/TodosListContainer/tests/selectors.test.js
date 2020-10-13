/**
 * Tests for TodosListContainer selectors
 */

import makeSelectTodosListContainer, {
  selectTodosListContainerDomain,
  makeSelectTodos,
  makeSelectLoading,
  makeSelectError,
  makeSelectTodosCount,
} from '../selectors';

describe('makeSelectTodosListContainer', () => {
  const todoListContainerSelector = makeSelectTodosListContainer();
  it('should return the TodosListContainer state', () => {
    const domainState = {
      todos: [],
    };
    const mockedState = {
      todosListContainer: domainState,
    };
    expect(todoListContainerSelector(mockedState)).toEqual(domainState);
  });
});

describe('selectTodosListContainerDomain', () => {
  it('should select the TodosListContainerDomain state', () => {
    const domainState = {
      todos: [],
    };
    const mockedState = {
      todosListContainer: domainState,
    };
    expect(selectTodosListContainerDomain(mockedState)).toEqual(domainState);
  });
});

describe('makeSelectTodos', () => {
  const todosSelector = makeSelectTodos();
  it('should select the todos', () => {
    const todos = [];
    const mockedState = {
      todosListContainer: {
        todos,
      },
    };
    expect(todosSelector(mockedState)).toEqual(todos);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the todos', () => {
    const loading = false;
    const mockedState = {
      todosListContainer: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the todos', () => {
    const error = true;
    const mockedState = {
      todosListContainer: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectTodosCount', () => {
  const todosCountSelector = makeSelectTodosCount();
  it('should return the count of unchecked todos', () => {
    const todos = [{ id: 1, text: 'Testing', checked: false }];
    const mockedState = {
      todosListContainer: {
        todos,
      },
    };
    expect(todosCountSelector(mockedState)).toEqual(todos.length);
  });
});
