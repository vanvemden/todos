/**
 *
 * Api
 *
 */

/* Api call to fetch all todos */
export function apiFetchTodos() {
  return fetch(`http://localhost:3000/api/todos/`).then(response =>
    response.json(),
  );
}

/* Api call to create todo */
export function apiCreateTodo(todo) {
  return fetch(`http://localhost:3000/api/todos/`, {
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
  return fetch(`http://localhost:3000/api/todos/${id}/checked`, {
    method: 'PATCH',
  }).then(response => response.json());
}
