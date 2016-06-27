const React = require('react');
const PokemonStore = require('../../stores/pokemon');
const PokemonActions = require('../../actions/pokemon_actions');
const PokemonIndexItem = require('./pokemon_index_item');

const PokemonsIndex = React.createClass({
  getInitialState(){
    return { pokemons: PokemonStore.all() };
  },
  componentDidMount(){
    this.PokemonListener = PokemonStore.addListener(this._onChange);
    PokemonActions.fetchAllPokemons();
  },
  _onChange(){
    this.setState({ pokemons: PokemonStore.all() });
  },
  componentWillUnmount(){
    this.PokemonListener.remove();
  },
  render(){
    return (
      <div>
        <ul>
          {this.state.pokemons.map((pokemon) => {
            return <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>;
          })}
        </ul>
      </div>
    );
  }

});

module.exports = PokemonsIndex;
