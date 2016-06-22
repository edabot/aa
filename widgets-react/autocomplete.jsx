const React = require('react');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const AutoComplete = React.createClass({
  getInitialState(){
    return { searchString: ""};
  },
  handleChange(e){
    this.setState({ searchString: e.target.value });
  },
  handleClick(e){
    this.setState({ searchString: e.target.innerHTML });
  },
  render(){

    let namesToDisplay = this.props.names;
    let searchString = this.state.searchString;
    if (searchString.length > 0) {
      searchString = searchString.toLowerCase();
      namesToDisplay = namesToDisplay.filter( function(name) {
        return name.toLowerCase().match(searchString);
      });
    }

    namesToDisplay = namesToDisplay.map(function(name, index){
      return (
        <li onClick={this.handleClick} key={name}>{name}</li>
        );
    }.bind(this));


    return (
      <div>
        <input value={this.state.searchString}
               onChange={this.handleChange}>
        </input>
        <ul>
          <ReactCSSTransitionGroup transitionName="auto"
                                   transitionEnterTimeout={200}
                                   transitionLeaveTimeout={200}>
            {namesToDisplay}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
});

module.exports = AutoComplete;
