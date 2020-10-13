require('dotenv').config();

const WEBAPI_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://todos.marcovanvemden.com';

module.exports = {
  WEBAPI_URL,
};
