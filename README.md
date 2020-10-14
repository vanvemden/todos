# Todos App

An app to keep a to-do list; a list of tasks one needs to complete. It is built with [React Boilerplate](https://www.reactboilerplate.com/) and leverages [React](https://reactjs.org/), [React Router](https://www.npmjs.com/package/react-router), [Redux](https://redux.js.org/), [Redux Saga](https://redux-saga.js.org/), [Reselect](https://github.com/reduxjs/reselect), [Styled Components](https://styled-components.com/), [Node](https://nodejs.org/en/docs/), [Express](https://expressjs.com/).

On the `client` side:

* __To-do list page__ (homepage): displays a list of all to-do items and checkboxes to indicate whether or not a todo item has been completed;
* __Add to-do page__: displays the form to create new to-do items;
* __Navigation bar__:
  * allows user to switch between pages,
  * displays the count of incomplete to-do list items.

On the `server` side:

* __Node/Express server__: 'faking a database' by keeping an array in memory;
* __API endpoints__:
  * to fetch all to-do items from the array,
  * to prepend a new to-do item to the array,
  * to toggle a to-do item's completed status in the array.

## Installing

_Please note: Even though this app meets the requirements of the take-home assignment it was created for, it is not a full-featured to-do app (yet)._

1. Clone the repository `git clone git@github.com:vanvemden/todos.git`
2. `cd todos`
3. `npm run setup`
4. `npm start`
5. Visit [http://localhost:3000](http://localhost:3000)

## Testing

Unit tests have been written for the `TodosListContainer` component. To run these tests:

1. `jest app/containers/TodosListContainer/tests/`

## Further Development

The following could be added to the app in future:

* Display _Add to-do_ page as an overlay on _To-do list_ page.
* Allow user to edit to-do text, and delete to-do items.
* Add selector to switch between site languages.
* Setup database to store to-do items in.
* Remove completed items from _To-do_ page, and display on _Done_ page.
* Add drag and drop functionality to list items in custom order.
* Add server side validation to prevent bad submissions.
* Add user authentication and email verification.
