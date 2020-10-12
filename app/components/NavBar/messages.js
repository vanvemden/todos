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
  navAddTodo: {
    id: `${scope}.nav_add_todo`,
    defaultMessage: 'add to-do',
  },
  navTodoList: {
    id: `${scope}.nav_todo_list`,
    defaultMessage: `to-do list [{todoCount}]`,
  },
});
