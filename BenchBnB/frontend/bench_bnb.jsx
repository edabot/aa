const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;

const Search = require('./components/search');

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<div><Search /></div>,
  document.getElementById("content"));
});
