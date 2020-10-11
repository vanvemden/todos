// import { take, call, put, select } from 'redux-saga/effects';
import { put, call, takeLatest } from 'redux-saga/effects';
import { submitTodoSucceeded, submitTodoFailed } from './actions';
import { SUBMIT_TODO } from './constants';
import { apiCreateTodo } from '../../api';

/* Send api request to post todo */
function* submitTodo(action) {
  try {
    const result = yield call(apiCreateTodo, action.todo);
    yield put(submitTodoSucceeded(result.todo));
  } catch (error) {
    yield put(submitTodoFailed(error.message));
  }
}

export default function* todoFormContainerSaga() {
  yield takeLatest(SUBMIT_TODO, submitTodo);
}
