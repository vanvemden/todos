/*
 *
 * TodosListContainer actions
 *
 */

import {
  REQUEST_TODOS,
  REQUEST_TODOS_SUCCEEDED,
  REQUEST_TODOS_FAILED,
  TOGGLE_TODO,
  TOGGLE_TODO_SUCCEEDED,
  TOGGLE_TODO_FAILED,
} from './constants';

/* Request all todos from db */
export function requestTodos() {
  return {
    type: REQUEST_TODOS,
  };
}

/* Request for all todos from db was successful */
export function requestTodosSucceeded(todos) {
  return {
    type: REQUEST_TODOS_SUCCEEDED,
    todos,
  };
}

/* Request for all todos from db failed */
export function requestTodosFailed(message) {
  return {
    type: REQUEST_TODOS_FAILED,
    message,
  };
}

/* Toggle todo checked boolean in db */
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

/* Toggle todo boolean in db was successful */
export function toggleTodoSucceeded(todo) {
  return {
    type: TOGGLE_TODO_SUCCEEDED,
    todo,
  };
}

/* Toggle todo boolean in db failed */
export function toggleTodoFailed(message) {
  return {
    type: TOGGLE_TODO_FAILED,
    message,
  };
}
