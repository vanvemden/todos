/**
 * Tests for TodosListContainer sagas
 */

import { put, takeLatest } from 'redux-saga/effects';
import { REQUEST_TODOS, TOGGLE_TODO } from '../constants';
import { requestTodosSucceeded, requestTodosFailed } from '../actions';
import todosListContainerSaga, {
  requestTodos,
  toggleTodoChecked,
} from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('requestTodos Saga', () => {
  let requestTodosGenerator;

  beforeEach(() => {
    /* Handle call to the api to fetch todos */
    requestTodosGenerator = requestTodos();
    const callDescriptor = requestTodosGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch requestTodosSucceeded on api success', () => {
    /* Mock response object from api call */
    const response = {
      todos: [{ id: '12345', text: 'Testing', checked: false }],
    };
    const putDescriptor = requestTodosGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(requestTodosSucceeded(response.todos)));
  });

  it('should dispatch requestTodosFailed on api error', () => {
    /* Mock response from catching api error */
    const response = new Error('Error message');
    const putDescriptor = requestTodosGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(requestTodosFailed(response.message)));
  });
});

describe('todosListContainerSaga', () => {
  const todosListContainerGenerator = todosListContainerSaga();

  it('should start task to watch for REQUEST_TODOS action', () => {
    const takeLatestDescriptor = todosListContainerGenerator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(REQUEST_TODOS, requestTodos),
    );
  });

  it('should start task to watch for TOGGLE_TODO action', () => {
    const takeLatestDescriptor = todosListContainerGenerator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(TOGGLE_TODO, toggleTodoChecked),
    );
  });
});
