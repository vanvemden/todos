/**
 *
 * TodoForm
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import history from '../../utils/history';
import messages from './messages';
import TextInput from '../TextInput';
import Button from '../Button';
import Form from '../Form';

function TodoForm({ todoText, onTodoTextChange, onTodoFormSubmit }) {
  const [todoTextError, setTodoTextError] = useState('');

  const handleFormSubmit = evt => {
    evt.preventDefault();

    /* Validate todo text input */
    if (todoText.trim().length === 0) {
      setTodoTextError('Please enter a description.');
    } else {
      setTodoTextError('');
      onTodoFormSubmit({
        text: todoText,
      });
    }
  };

  const handleTextChange = evt => {
    const text = evt.target.value;
    onTodoTextChange(text);
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <TextInput
          placeholder="Describe what needs to be done..."
          onChange={handleTextChange}
          error={todoTextError}
          value={todoText}
          type="text"
          id="text"
        />
        <Button
          bgColor="green"
          message={messages.buttonSubmit}
          onClick={handleFormSubmit}
        />
        <Button
          bgColor="red"
          message={messages.buttonCancel}
          onClick={() => {
            history.push('/todos');
          }}
        />
      </Form>
    </div>
  );
}

TodoForm.propTypes = {
  todoText: PropTypes.string.isRequired,
  onTodoTextChange: PropTypes.func.isRequired,
  onTodoFormSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
