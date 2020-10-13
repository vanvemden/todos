/**
 *
 * TodosListContainer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { requestTodos, toggleTodo } from './actions';
import {
  makeSelectTodos,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

import TodoList from '../../components/TodoList';

export function TodosListContainer({
  todos,
  loading,
  error,
  onRequestTodos,
  onToggleTodo,
}) {
  useInjectReducer({ key: 'todosListContainer', reducer });
  useInjectSaga({ key: 'todosListContainer', saga });

  useEffect(() => {
    // On mount, execute request todos action
    onRequestTodos();
  }, []);

  const todoListProps = {
    todos,
    loading,
    error,
    onToggleTodo,
  };

  return (
    <div>
      <Helmet>
        <title>To-do List</title>
        <meta name="description" content="The list with to-do items." />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <TodoList {...todoListProps} />
    </div>
  );
}

// Typechecking the props passed to the component
TodosListContainer.propTypes = {
  todos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onRequestTodos: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onRequestTodos: () => dispatch(requestTodos()),
    onToggleTodo: id => dispatch(toggleTodo(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(TodosListContainer);
