export function postTodoApi({ todo }) {
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
