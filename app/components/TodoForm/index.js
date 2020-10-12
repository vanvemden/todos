/**
 *
 * TodoForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

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
      <Form onSubmit={handleFormSubmit}>
        <TextInput
          placeholder="Describe what needs to be done..."
          onChange={onTodoTextChange}
          value={todoText}
          type="text"
          id="text"
        />
        <Button bgColor="green" message={messages.buttonSubmit} onClick={handleFormSubmit} />
        <Button bgColor="red" message={messages.buttonCancel} onClick={onTodoFormCancel} />
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
