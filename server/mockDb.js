/**
 *
 * Mock Database
 *
 */

const uuid = require('react-uuid');

const todos = [
  { id: uuid(), text: 'Hello World!', checked: false },
  { id: uuid(), text: 'Hello World 1!', checked: true },
  { id: uuid(), text: 'Request tech screen', checked: false },
  { id: uuid(), text: 'Learn react-boilerplate', checked: true },
];

module.exports = todos;
