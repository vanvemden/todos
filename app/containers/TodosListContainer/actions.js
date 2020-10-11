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

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function toggleTodoSucceeded(id) {
  return {
    type: TOGGLE_TODO_SUCCEEDED,
    id,
  };
}

export function toggleTodoFailed(message) {
  return {
    type: TOGGLE_TODO_FAILED,
    message,
  };
}
