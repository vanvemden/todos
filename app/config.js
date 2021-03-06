require('dotenv').config();

const API_BASEURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://api-for-todos-app.herokuapp.com/';

module.exports = {
  API_BASEURL,
};
