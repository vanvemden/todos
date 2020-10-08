/*
 *
 * TodosListContainer reducer
 *
 */
import produce from 'immer';
import { REQUEST_TODOS_SUCCEEDED } from './constants';

export const initialState = {
  todos: [],
};

/* eslint-disable default-case, no-param-reassign */
const todosListContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_TODOS_SUCCEEDED:
        draft.todos = action.todos;
        break;
    }
  });

export default todosListContainerReducer;
