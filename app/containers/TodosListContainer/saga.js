import { put, call, takeLatest } from 'redux-saga/effects';
import { REQUEST_TODOS } from './constants';
import { requestTodosSucceeded, requestTodosFailed } from './actions';
import { getTodosApi } from '../../api';

function* requestTodos() {
  try {
    const result = yield call(getTodosApi);
    yield put(requestTodosSucceeded(result.todos));
  } catch (err) {
    yield put(requestTodosFailed(err.message));
  }
}

export default function* requestTodosSaga() {
  yield takeLatest(REQUEST_TODOS, requestTodos);
}
