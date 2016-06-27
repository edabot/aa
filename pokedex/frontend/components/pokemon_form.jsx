const React = require('react');
const PokemonActions = require('../actions/pokemon_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const PokemonForm = React.createClass({
  getInitialState(){
    return {
      name: "",
      image_url: "",
      poke_type: "bug",
      attack: "",
      defense: "",
      move_1: "",
      move_2: ""
    };
  },

  handleChange(event){
    let id = event.target.key;
    let newState = {};
    newState[id] = event.target.value;
    this.setState(newState);
  },

  goToNewPokemon(id){
    hashHistory.push(`/pokemon/${id}`);
  },

  handleClick(){
    let pokemon = this.state;

    PokemonActions.createPokemon(pokemon, this.goToNewPokemon);
  },

  render(){
    return(
      <form className="new-pokemon">
        <div>
          <label>Name:
            <input id="pokemon[name]" key="name" type="text" onChange={this.handleChange} value={this.state.name}></input>
          </label>
        </div>
        <div>
          <label>Image Url:
            <input id="pokemon[image_url]" key="image_url" type="text" onChange={this.handleChange} value={this.state.image_url}></input>
          </label>
        </div>
        <div>
          <label>Type:
            <select id="pokemon[poke_type]" key="poke_type" onChange={this.handleChange} className="type-selector" value={this.state.poke_type}>
              <option selected value="bug">bug</option>
              <option value="dragon">dragon</option>
              <option value="electric">electric</option>
              <option value="fighting">fighting</option>
              <option value="fire">fire</option>
              <option value="flying">flying</option>
              <option value="ghost">ghost</option>
              <option value="grass">grass</option>
              <option value="ground">ground</option>
              <option value="ice">ice</option>
              <option value="normal">normal</option>
              <option value="poison">poison</option>
              <option value="psychic">psychic</option>
              <option value="rock">rock</option>
              <option value="steel">steel</option>
              <option value="water">water</option>
            </select>
          </label>
        </div>
        <div>
          <label>Attack:
            <input id="pokemon[attack]" key="attack" type="number" onChange={this.handleChange} value={this.state.attack}></input>
          </label>
        </div>
        <div>
          <label>Defense:
            <input id="pokemon[defense]" key="defense" type="number" onChange={this.handleChange} value={this.state.defense}></input>
          </label>
        </div>
        <div>
          <label>Move #1:
            <input id="pokemon[moves][]" key="move_1" type="text" onChange={this.handleChange} value={this.state.move_1}></input>
          </label>
        </div>
        <div>
          <label>Move #2:
            <input id="pokemon[moves][]" key="move_2" type="text" onChange={this.handleChange} value={this.state.move_2}></input>
          </label>
        </div>
        <button onClick={this.handleClick}>Create Pokemon</button>
      </form>
    );
  }
});

module.exports = PokemonForm;
