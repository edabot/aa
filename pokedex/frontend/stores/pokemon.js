const React = require('react');
const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const PokemonConstants = require('../constants/pokemon_constants');
const PokemonStore = new Store(Dispatcher);

let _pokemons = {};

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(pokemon => {
    _pokemons[pokemon.id] = pokemon;
  });
};
PokemonStore.resetPokemon = function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case PokemonConstants.POKEMONS_RECEIVED:
    PokemonStore.resetPokemons(payload.pokemons);
    this.__emitChange();
    break;
  case PokemonConstants.POKEMON_RECEIVED:
    PokemonStore.resetPokemon(payload.pokemon);
    this.__emitChange();
    break;
  case "NEW_POKEMON":
    PokemonStore.newPokemon(payload.pokemon);
    this.__emitChange();
    break;
  }
};

PokemonStore.all = function() {
  const values = [];
  Object.keys(_pokemons).forEach((key) => {
    values[key] = _pokemons[key];
  });
  return values.filter((pokemon) => { return pokemon !== null; });
};

PokemonStore.find = function(int) {
  if (_pokemons[int]) {
    return _pokemons[int];
  }
};

module.exports = PokemonStore;
