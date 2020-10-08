// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { REQUEST_TODOS } from './constants';

function* requestTodos() {
  console.log('requesting todos from api');
}

// Individual exports for testing
export default function* requestTodosSaga() {
  yield takeLatest(REQUEST_TODOS, requestTodos);
}
