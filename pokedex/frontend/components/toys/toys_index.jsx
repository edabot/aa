const React = require('react');
const ToyListItem = require('./toy_list_item');

const ToysIndex = React.createClass({

  render() {
    return(
      <div>
        {this.props.toys.map(toy => {
          return <ToyListItem key={toy.id} toy={toy} />;
        })}
      </div>
    );
  }
});

module.exports = ToysIndex;
