/*
 *
 * TodoFormContainer actions
 *
 */

import {
  TODO_TEXT_CHANGE,
  SUBMIT_TODO,
  SUBMIT_TODO_SUCCEEDED,
  SUBMIT_TODO_FAILED,
  SUBMIT_TODO_CANCELLED,
} from './constants';

// Change is made to text input field
export function changeTextInput(text) {
  return {
    type: TODO_TEXT_CHANGE,
    text,
  };
}

// Action when user submits todo form
export function submitTodo(todo) {
  return {
    type: SUBMIT_TODO,
    todo,
  };
}

// Action when add todo api call was success
export function submitTodoSucceeded(todo) {
  return {
    type: SUBMIT_TODO_SUCCEEDED,
    todo,
  };
}

// Action when add todo api call failed
export function submitTodoFailed(message) {
  return {
    type: SUBMIT_TODO_FAILED,
    message,
  };
}

// Action when user cancels todo form
export function submitTodoCancelled() {
  return {
    type: SUBMIT_TODO_CANCELLED,
  };
}
