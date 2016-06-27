const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const PokemonIndexItem = React.createClass({
  handleClick(){
    hashHistory.push(`/pokemon/${this.props.pokemon.id}`);
  },
  render() {
    return(
      <li className="poke-list-item" onClick={this.handleClick}>
        Name: {this.props.pokemon.name}
        Poke Type: {this.props.pokemon.poke_type}
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
