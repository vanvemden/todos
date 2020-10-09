/**
 *
 * TodoForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TodoForm({ text }) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <input placeholder="Description" value={text} type="text" />
    </div>
  );
}

TodoForm.propTypes = {
  text: PropTypes.string,
};

export default TodoForm;
