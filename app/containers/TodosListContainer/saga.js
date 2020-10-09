import { put, takeLatest } from 'redux-saga/effects';
import { REQUEST_TODOS } from './constants';
import { requestTodosSucceeded, requestTodosFailed } from './actions';

const todos = [
  { id: '1', text: 'Hello World!', checked: false },
  { id: '2', text: 'Hello World 1!', checked: true },
  { id: '3', text: 'Hello World 2!', checked: false },
  { id: '4', text: 'Hello World 3!', checked: true },
];

function* requestTodos() {
  try {
    yield put(requestTodosSucceeded(todos));
  } catch (err) {
    yield put(requestTodosFailed(err.message));
  }
}

export default function* requestTodosSaga() {
  yield takeLatest(REQUEST_TODOS, requestTodos);
}
