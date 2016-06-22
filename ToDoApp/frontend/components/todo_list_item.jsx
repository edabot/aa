const React = require('react');
const TodoStore = require('../stores/todo_store');
const DoneButton = require('./done_button');
const TodoDetailView = require('./todo_detail_view');

const TodoListItem = React.createClass({
  getInitialState() {
    return({detail: false});
  },
  toggleDetail(){
    this.setState({detail: !this.state.detail});
  },
  renderDetail(){
    if (this.state.detail) {
      return <TodoDetailView item={this.props.item} />;
    }
  },
  render: function() {
    return (
      <div>
        <div onClick={this.toggleDetail}>{this.props.item.title}</div>
        <DoneButton item={this.props.item} />
        {this.renderDetail()}
      </div>
    );
  }
});

module.exports = TodoListItem;
