// import { take, call, put, select } from 'redux-saga/effects';
import { put, call, takeLatest } from 'redux-saga/effects';
import { submitTodoSucceeded, submitTodoFailed } from './actions';
import { SUBMIT_TODO } from './constants';
import { postTodoApi } from '../../api';

function* submitTodo(action) {
  try {
    const todo = yield call(postTodoApi, action);
    yield put(submitTodoSucceeded(todo));
  } catch (error) {
    yield put(submitTodoFailed(error.message));
  }
}
// Individual exports for testing
export default function* submitTodoSaga() {
  yield takeLatest(SUBMIT_TODO, submitTodo);
}
