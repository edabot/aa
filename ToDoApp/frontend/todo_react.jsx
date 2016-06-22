const React = require('react');
const ReactDOM = require('react-dom');
const TodoList = require('./components/todo_list');


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
	  <TodoList />,
	  document.getElementById('todo_list')
  );
});
