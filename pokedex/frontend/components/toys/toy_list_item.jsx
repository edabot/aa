const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const ToyListItem = React.createClass({

  clickHandler() {
    hashHistory.push(`pokemon/${this.props.toy.pokemon_id}/toys/${this.props.toy.id}`);
  },

  render() {
    let toy = this.props.toy;
    return(
      <li className="toy-list-item" onClick={this.clickHandler}>
        Name: {toy.name}
        <br />
        Happiness: {toy.happiness}
        <br />
        Price: {toy.price}
      </li>
    );
  }
});

module.exports = ToyListItem;
