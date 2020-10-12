/*
 *
 * TodoFormContainer reducer
 *
 */
import produce from 'immer';
import { TODO_TEXT_CHANGE, SUBMIT_TODO_SUCCEEDED } from './constants';

export const initialState = {
  text: '',
};

/* eslint-disable default-case, no-param-reassign */
const todoFormContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TODO_TEXT_CHANGE:
        draft.text = action.text;
        break;
      case SUBMIT_TODO_SUCCEEDED:
        draft.text = '';
        break;
    }
  });

export default todoFormContainerReducer;
