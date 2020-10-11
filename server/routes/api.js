/**
 *
 * Api Routes
 *
 */

const express = require('express');
const Todo = require('../models/Todo');

const router = new express.Router();

/* GET api/todos: fetch all todos in db */
router.get('/todos', async function geTodos(req, res, next) {
  try {
    const todos = await Todo.getAll();
    return res.json({ todos });
  } catch (err) {
    return next(err);
  }
});

/* POST api/todos: save a new todo to db */
router.post('/todos', async function postTodo(req, res, next) {
  try {
    const todo = await Todo.create(req.body.todo);
    return res.status(201).json({ todo });
  } catch (err) {
    return next(err);
  }
});

/* PATCH api/todos/:id/checked: toggle checked boolean in db */
router.patch('/todos/:todoId/checked', async function patchTodoChecked(
  req,
  res,
  next,
) {
  try {
    const todo = await Todo.toggleChecked(req.params.todoId);
    return res.status(201).json({ todo });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
