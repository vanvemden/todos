/**
 *
 * Todo Model
 *
 */

const uuid = require('react-uuid');
// TODO: connect to database
const todosDb = require('../mockDb');

class Todo {
  static async getAll() {
    // TODO: get todos from database
    return todosDb;
  }

  static async create(todo) {
    // TODO: insert todo into database
    const tempTodo = {
      id: uuid(),
      text: todo.text,
      checked: false,
    };
    todosDb.unshift(tempTodo);
    return tempTodo;
  }

  static async toggleChecked(id) {
    // TODO: update todo in database
    const idx = todosDb.findIndex(todo => todo.id === id);
    if (idx >= 0) {
      todosDb[idx].checked = !todosDb[idx].checked;
    }
    return todosDb[idx];
  }
}

module.exports = Todo;
