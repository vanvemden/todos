/**
 *
 * Todo Model
 *
 */

const uuid = require ('react-uuid');
// TODO: connect to database
const todosDb = require('../mockDb');

class Todo {
  static async getAll() {
    // TODO: get from database
    return todosDb;
  }

  static async create(todo) {
    // TODO: save to database
    const tempTodo = {
      id: uuid(),
      text: todo.text,
      checked: false,
    };
    todosDb.unshift(tempTodo);
    return tempTodo;
  }
}

module.exports = Todo;
