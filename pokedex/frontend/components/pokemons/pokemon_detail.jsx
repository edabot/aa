const React = require('react');
const PokemonStore = require('../../stores/pokemon');
const PokemonActions = require('../../actions/pokemon_actions');
const ToysIndex = require('../toys/toys_index');

const PokemonDetail = React.createClass({

  getInitialState() {
    return { pokemon: {} };
  },

  getStateFromStore(id) {
    // console.log("got pokemon");
    let pokemonId = id || parseInt(this.props.params.pokemonId);
    this.setState( { pokemon: PokemonStore.find(pokemonId) } );
  },

  componentDidMount() {
    this.PokemonListener = PokemonStore.addListener(this.getStateFromStore);
  },

  componentWillReceiveProps(nextProps) {
    PokemonActions.fetchPokemon(nextProps.params.pokemonId);
  },

  render() {

    const toys = this.state.pokemon.toys || [];

    return(
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            <img src={this.state.pokemon.image_url} />
            name: {this.state.pokemon.name}
            <br/>
            attack: {this.state.pokemon.attack}
            <br/>
            defense: {this.state.pokemon.defense}
            <br/>
            poke_type: {this.state.pokemon.poke_type}
            <br/>
            moves: {this.state.pokemon.moves}
          </div>
          <h2 className="detail-header">Toys:</h2>
          <ToysIndex toys={toys}/>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = PokemonDetail;
