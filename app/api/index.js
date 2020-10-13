/**
 *
 * Api functions
 *
 */

import { API_BASEURL } from '../config';

/* Api call to fetch all todos */
export function apiFetchTodos() {
  return fetch(`${API_BASEURL}/api/todos/`).then(response => response.json());
}

/* Api call to create a todo */
export function apiCreateTodo(todo) {
  return fetch(`${API_BASEURL}/api/todos/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      todo,
    }),
  }).then(response => response.json());
}

/* Api call to toggle checked boolean */
export function apiToggleChecked(id) {
  return fetch(`${API_BASEURL}/api/todos/${id}/checked`, {
    method: 'PATCH',
  }).then(response => response.json());
}
