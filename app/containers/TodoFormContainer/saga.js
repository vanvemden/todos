// import { take, call, put, select } from 'redux-saga/effects';
import { put, call, takeLatest } from 'redux-saga/effects';
import uuid from 'react-uuid';
import { submitTodoSucceeded } from './actions';
import { SUBMIT_TODO } from './constants';
import { postTodoApi } from '../../api';

function* submitTodo(action) {
  try {
    const todo = yield call(postTodoApi, action.todo);
    yield put(submitTodoSucceeded(todo));
  } catch (error) {
    // TODO: Uncomment below & load 'submitTodoFailed' when api works
    // yield put(submitTodoFailed(error.message));

    // TODO: Remove code below when api works
    const tempTodo = {
      id: uuid(),
      text: action.todo.text,
      checked: false,
    };
    yield put(submitTodoSucceeded(tempTodo));
  }
}
// Individual exports for testing
export default function* submitTodoSaga() {
  yield takeLatest(SUBMIT_TODO, submitTodo);
}
