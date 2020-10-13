/**
 *
 * Tests for TodosListContainer
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

// import 'jest-dom/extend-expect'; // add some helpful assertions
import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';

import { TodosListContainer, mapDispatchToProps } from '../index';
import { requestTodos, toggleTodo } from '../actions';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<TodosListContainer />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <TodosListContainer
            todos={[]}
            onRequestTodos={() => {}}
            onToggleTodo={() => {}}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <TodosListContainer
            todos={[]}
            onRequestTodos={() => {}}
            onToggleTodo={() => {}}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('Should fetch the todos on mount', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <TodosListContainer
            todos={[]}
            onRequestTodos={submitSpy}
            onToggleTodo={() => {}}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onRequestTodos', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onRequestTodos).toBeDefined();
      });

      it('should dispatch requestTodos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onRequestTodos();
        expect(dispatch).toHaveBeenCalledWith(requestTodos());
      });
    });

    describe('onToggleTodo', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onToggleTodo).toBeDefined();
      });

      it('should dispatch toggleTodo when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const id = '12345';
        result.onToggleTodo(id);
        expect(dispatch).toHaveBeenCalledWith(toggleTodo(id));
      });
    });
  });
});
