const React = require('react');
const PokemonStore = require('../../stores/pokemon');
const PokemonActions = require('../../actions/pokemon_actions');

const ToyDetail = React.createClass({

  getInitialState() {
    return { toy: {} };
  },

  getStateFromStore() {
    let pokemon = PokemonStore.find(this.props.params.pokemonId);
    let toy = {};

    if (pokemon) {
      toy = pokemon.toys.find( pokeToy => {
        return pokeToy["id"] === parseInt(this.props.params.toyId);
      });
    }

    this.setState( { toy: toy });
  },

  _onChange() {
    this.getStateFromStore();
  },

  componentDidMount() {
    this.ToyListener = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.ToyListener.remove();
  },

  componentWillReceiveProps(nextProps) {
    PokemonActions.fetchPokemon(nextProps.params.pokemonId);
  },

  render() {
    return(
      <div className="toy-detail-pane">
        <div className="detail">
          <img className="toy-image" src={this.state.toy.image_url} />
          name: {this.state.toy.name}
          <br/>
          happiness: {this.state.toy.happiness}
          <br/>
          price: {this.state.toy.price}
        </div>
      </div>
    );
  }
});

module.exports = ToyDetail;
