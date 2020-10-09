/*
 *
 * TodoFormContainer actions
 *
 */

import {
  SUBMIT_TODO,
  SUBMIT_TODO_SUCCEEDED,
  SUBMIT_TODO_FAILED,
  SUBMIT_TODO_CANCELLED,
} from './constants';

export function submitTodo() {
  return {
    type: SUBMIT_TODO,
  };
}

export function submitTodoSucceeded(todo) {
  return {
    type: SUBMIT_TODO_SUCCEEDED,
    todo,
  };
}

export function submitTodoFailed(message) {
  return {
    type: SUBMIT_TODO_FAILED,
    message,
  };
}

export function submitTodoCancelled() {
  return {
    type: SUBMIT_TODO_CANCELLED,
  };
}
