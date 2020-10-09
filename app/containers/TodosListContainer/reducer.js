/*
 *
 * TodosListContainer reducer
 *
 */
import produce from 'immer';
import { REQUEST_TODOS_SUCCEEDED, TOGGLE_TODO } from './constants';

export const initialState = {
  todos: [],
};

/* Helper function to toggle checked boolean */
function toggleTodoCheckedState(todos, id) {
  const tempTodos = todos;
  const idx = tempTodos.findIndex(todo => todo.id === id);
  if (idx >= 0) {
    tempTodos[idx].checked = !tempTodos[idx].checked;
  }
  return tempTodos;
}

/* eslint-disable default-case, no-param-reassign */
const todosListContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_TODOS_SUCCEEDED:
        draft.todos = action.todos;
        break;
      case TOGGLE_TODO:
        draft.todos = toggleTodoCheckedState(draft.todos, action.id);
        break;
    }
  });

export default todosListContainerReducer;
