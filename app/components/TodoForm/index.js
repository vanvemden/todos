/**
 *
 * TodoForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import TextInput from '../TextInput';
import Button from '../Button';
import Form from '../Form';

function TodoForm({
  todoText,
  onTodoTextChange,
  onTodoFormSubmit,
  onTodoFormCancel,
}) {
  const handleFormSubmit = evt => {
    evt.preventDefault();
    onTodoFormSubmit({
      text: todoText,
    });
  };

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Form onSubmit={handleFormSubmit}>
        <TextInput
          placeholder="What needs to be done..."
          onChange={onTodoTextChange}
          value={todoText}
          type="text"
          id="text"
        />
        <Button bgColor="red" label="Add" onClick={handleFormSubmit} />
        <Button bgColor="green" label="Cancel" onClick={onTodoFormCancel} />
      </Form>
    </div>
  );
}

TodoForm.propTypes = {
  todoText: PropTypes.string.isRequired,
  onTodoTextChange: PropTypes.func.isRequired,
  onTodoFormSubmit: PropTypes.func.isRequired,
  onTodoFormCancel: PropTypes.func.isRequired,
};

export default TodoForm;
