/*
 *
 * TodosListContainer actions
 *
 */

import {
  REQUEST_TODOS,
  REQUEST_TODOS_SUCCEEDED,
  REQUEST_TODOS_FAILED,
} from './constants';

export function requestTodos() {
  return {
    type: REQUEST_TODOS,
  };
}

export function requestTodosSucceeded(todos) {
  return {
    type: REQUEST_TODOS_SUCCEEDED,
    todos,
  };
}

export function requestTodosFailed(message) {
  return {
    type: REQUEST_TODOS_FAILED,
    message,
  };
}
