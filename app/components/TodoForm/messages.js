/*
 * TodoForm Messages
 *
 * This contains all the text for the TodoForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TodoForm';

export default defineMessages({
  buttonSubmit: {
    id: `${scope}.button_submit`,
    defaultMessage: 'submit',
  },
  buttonCancel: {
    id: `${scope}.button_cancel`,
    defaultMessage: 'cancel',
  },
});
