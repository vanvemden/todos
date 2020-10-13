/**
 *
 * Mock Database
 *
 */

const uuid = require('react-uuid');

const todos = [
  { id: uuid(), text: 'Add to-do items to your list!', checked: false },
  { id: uuid(), text: 'Open Todos app in browser', checked: true },
  { id: uuid(), text: 'Install Todos app on local machine', checked: true },
  { id: uuid(), text: 'Clone the Todos app repository from git', checked: true },
];

module.exports = todos;
