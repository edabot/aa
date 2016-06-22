const React = require('react');
const TodoStore = require('../stores/todo_store');

const TodoForm = React.createClass({
  getInitialState() {
    return {title: "", body: "", done: false};
  },
  updateTitle(e) {
    this.setState({title: e.currentTarget.value});
  },
  updateBody(e) {
    this.setState({body: e.currentTarget.value});
  },
  onSubmit() {
    TodoStore.create({"todo[title]": this.state.title,
                      "todo[body]": this.state.body
    });
    this.setState({title: "", body: "", done: false});
  },
  render() {
    return (
      <div>
        <input type="text"
               onChange={this.updateTitle}
               value={this.state.title} />
        <input type="text"
               onChange={this.updateBody}
               value={this.state.body} />
             <button onClick={this.onSubmit}>make todo</button>
      </div>

    );
  }

});

module.exports = TodoForm;
