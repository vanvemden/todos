/**
 *
 * TodoFormContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectTodoText } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import TodoForm from '../../components/TodoForm';
import { changeTextInput, submitTodo, submitTodoCancelled } from './actions';

export function TodoFormContainer({
  todoText,
  onTodoTextChange,
  onTodoFormSubmit,
  onTodoFormCancel,
}) {
  useInjectReducer({ key: 'todoFormContainer', reducer });
  useInjectSaga({ key: 'todoFormContainer', saga });

  // Props to pass to component
  const todoFormProps = {
    todoText,
    onTodoTextChange,
    onTodoFormSubmit,
    onTodoFormCancel,
  };

  return (
    <div>
      <Helmet>
        <title>Add Todo</title>
        <meta name="description" content="Add a todo item to list." />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <TodoForm {...todoFormProps} />
    </div>
  );
}

TodoFormContainer.propTypes = {
  todoText: PropTypes.string.isRequired,
  onTodoTextChange: PropTypes.func.isRequired,
  onTodoFormSubmit: PropTypes.func.isRequired,
  onTodoFormCancel: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  todoText: makeSelectTodoText(),
});

function mapDispatchToProps(dispatch) {
  return {
    onTodoTextChange: evt => dispatch(changeTextInput(evt.target.value)),
    onTodoFormSubmit: todo => dispatch(submitTodo(todo)),
    onTodoFormCancel: () => dispatch(submitTodoCancelled()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(TodoFormContainer);
