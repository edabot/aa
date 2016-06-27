const Dispatcher = require('../dispatcher/dispatcher');
const ApiUtil = require('../util/api_util');
const PokemonConstants = require('../constants/pokemon_constants');

const PokemonActions = {
  receiveAllPokemons(pokemons){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },
  receivePokemon(pokemon){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  },
  fetchAllPokemons(){
    ApiUtil.fetchAllPokemons(this.receiveAllPokemons);
  },
  fetchPokemon(id){
    ApiUtil.fetchPokemon(id, this.receivePokemon);
  },
  receiveNewPokemon(pokemon, cb){
    Dispatcher.dispatch({
      actionType: "NEW_POKEMON",
      pokemon: pokemon,
      callback: cb
    });
  },
  createPokemon(pokemon, cb){
    ApiUtil.newPokemon(pokemon, cb);
  }

};

module.exports = PokemonActions;
