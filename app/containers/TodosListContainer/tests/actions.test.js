import {
  requestTodos,
  requestTodosSucceeded,
  requestTodosFailed,
  toggleTodo,
  toggleTodoSucceeded,
  toggleTodoFailed,
} from '../actions';
import {
  REQUEST_TODOS,
  REQUEST_TODOS_SUCCEEDED,
  REQUEST_TODOS_FAILED,
  TOGGLE_TODO,
  TOGGLE_TODO_SUCCEEDED,
  TOGGLE_TODO_FAILED,
} from '../constants';

describe('TodosListContainer actions', () => {
  describe('requestTodos', () => {
    it('has a type of REQUEST_TODOS', () => {
      const expected = {
        type: REQUEST_TODOS,
      };
      expect(requestTodos()).toEqual(expected);
    });
  });

  describe('requestTodosSucceeded', () => {
    it('has a type of REQUEST_TODOS_SUCCEEDED', () => {
      const payload = [];
      const expected = {
        type: REQUEST_TODOS_SUCCEEDED,
        todos: payload,
      };
      expect(requestTodosSucceeded(payload)).toEqual(expected);
    });
  });

  describe('requestTodosFailed', () => {
    it('has a type of REQUEST_TODOS_FAILED', () => {
      const payload = 'Error message';
      const expected = {
        type: REQUEST_TODOS_FAILED,
        message: payload,
      };
      expect(requestTodosFailed(payload)).toEqual(expected);
    });
  });

  describe('toggleTodo', () => {
    it('has a type of TOGGLE_TODO', () => {
      const payload = 1;
      const expected = {
        type: TOGGLE_TODO,
        id: payload,
      };
      expect(toggleTodo(payload)).toEqual(expected);
    });
  });

  describe('toggleTodoSucceeded', () => {
    it('has a type of TOGGLE_TODO_SUCCEEDED', () => {
      const payload = {};
      const expected = {
        type: TOGGLE_TODO_SUCCEEDED,
        todo: payload,
      };
      expect(toggleTodoSucceeded(payload)).toEqual(expected);
    });
  });

  describe('toggleTodoFailed', () => {
    it('has a type of TOGGLE_TODO_FAILED', () => {
      const payload = 'Error message';
      const expected = {
        type: TOGGLE_TODO_FAILED,
        message: payload,
      };
      expect(toggleTodoFailed(payload)).toEqual(expected);
    });
  });
});
