/*
 *
 * TodosListContainer reducer
 *
 */
import produce from 'immer';
import { REQUEST_TODOS_SUCCEEDED, TOGGLE_TODO_SUCCEEDED } from './constants';
import { SUBMIT_TODO_SUCCEEDED } from '../TodoFormContainer/constants';

export const initialState = {
  todos: [],
};

/* Helper function to toggle checked boolean */
function toggleTodoCheckedState(todos, todo) {
  const tempTodos = todos;
  const idx = tempTodos.findIndex(t => t.id === todo.id);
  if (idx >= 0) {
    tempTodos[idx].checked = !tempTodos[idx].checked;
  }
  return tempTodos;
}

/* Helper function to add todo to state array */
function addTodoToState(todos, todo) {
  const tempTodos = todos;
  tempTodos.unshift(todo);
  return tempTodos;
}

/* eslint-disable default-case, no-param-reassign */
const todosListContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_TODOS_SUCCEEDED:
        draft.todos = action.todos;
        break;
      case TOGGLE_TODO_SUCCEEDED:
        draft.todos = toggleTodoCheckedState(draft.todos, action.todo);
        break;
      case SUBMIT_TODO_SUCCEEDED:
        draft.todos = addTodoToState(draft.todos, action.todo);
        break;
    }
  });

export default todosListContainerReducer;
