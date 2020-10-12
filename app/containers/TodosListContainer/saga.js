import { put, call, takeLatest } from 'redux-saga/effects';
import { REQUEST_TODOS, TOGGLE_TODO } from './constants';
import { apiFetchTodos, apiToggleChecked } from '../../api';
import {
  requestTodosSucceeded,
  requestTodosFailed,
  toggleTodoSucceeded,
  toggleTodoFailed,
} from './actions';

/* Send api request to fetch todos */
export function* requestTodos() {
  try {
    const result = yield call(apiFetchTodos);
    yield put(requestTodosSucceeded(result.todos));
  } catch (err) {
    yield put(requestTodosFailed(err.message));
  }
}

/* Send api request to toggle checked boolean */
export function* toggleTodoChecked(action) {
  try {
    const result = yield call(apiToggleChecked, action.id);
    yield put(toggleTodoSucceeded(result.todo));
  } catch (err) {
    yield put(toggleTodoFailed(err.message));
  }
}

export default function* todosListContainerSaga() {
  yield takeLatest(REQUEST_TODOS, requestTodos);
  yield takeLatest(TOGGLE_TODO, toggleTodoChecked);
}
