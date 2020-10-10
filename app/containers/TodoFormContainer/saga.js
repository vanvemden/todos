// import { take, call, put, select } from 'redux-saga/effects';
import { put, call, takeLatest } from 'redux-saga/effects';
import uuid from 'react-uuid';
import { submitTodoFailed, submitTodoSucceeded } from './actions';
import { SUBMIT_TODO } from './constants';
import { postTodoApi } from '../../api';

function* submitTodo(action) {
  const todo = action.todo;
  todo.id = uuid();

  try {
    yield call(postTodoApi, todo);
    yield put(submitTodoSucceeded(todo));
  } catch (error) {
    console.log('Error but continuing', error);
    yield put(submitTodoSucceeded(todo));
    // yield put(submitTodoFailed(error.message));
  }
}
// Individual exports for testing
export default function* submitTodoSaga() {
  yield takeLatest(SUBMIT_TODO, submitTodo);
}
