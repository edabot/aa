const React = require('react');
const TodoStore = require('../stores/todo_store');
const TodoListItem = require('./todo_list_item');
const TodoForm = require('./todo_form');

const TodoList = React.createClass({
  getInitialState(){
    return {
      todos: TodoStore.all()
    };
  },
  todosChanged(){
    this.setState({ todos: TodoStore.all() });
  },
  componentDidMount(){
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },
  componentWillUnmount(){
    TodoStore.removeChangeHandler(this.todosChanged);
  },
  render: function() {
    return (
      <div>
        {
          this.state.todos.map(todo => {
            return <TodoListItem key={todo.id} item={todo} />;
          })
        }
        <TodoForm />
      </div>
    );
  }
});

module.exports = TodoList;
