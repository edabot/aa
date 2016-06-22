const React = require('react');

const TodoDetailView = React.createClass({
  handleDestroy(e){
    TodoStore.destroy(parseInt(e.currentTarget.value));
  },
  render: function() {
    return (
      <div>
        <div>{this.props.item.body}</div>
        <button onClick={this.handleDestroy}
                value={this.props.item.id}>delete</button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
