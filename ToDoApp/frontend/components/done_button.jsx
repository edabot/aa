const React = require('react');
const TodoStore = require('../stores/todo_store');

const DoneButton = React.createClass({
  handleDone(e){
    TodoStore.toggleDone(parseInt(e.currentTarget.value));
  },
  render(){
    let buttonText = "done";
    if (this.props.item.done) { buttonText = "undo"; }
    return (
      <div>
        <button onClick={this.handleDone}
                value={this.props.item.id}>{buttonText}</button>
      </div>
    );
  }
});

module.exports = DoneButton;
