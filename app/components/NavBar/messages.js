/*
 * NavBar Messages
 *
 * This contains all the text for the NavBar component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.NavBar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Navigation!',
  },
  navTodoList: {
    id: `${scope}.nav_todo_list`,
    defaultMessage: 'To do\'s',
  },
  navAddTodo: {
    id: `${scope}.nav_add_todo`,
    defaultMessage: 'Add Todo',
  },
});
