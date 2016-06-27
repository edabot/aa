const React = require('react');
const BenchActions = require('../actions/bench_actions');

const BenchForm = React.createClass({
  getInitialState(){
    return({
      description: "",
      numberOfSeats: "",
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng
    });
  },

  _handleSubmit(){
    BenchActions.createBench({
      description: this.state.description,
      seats: parseInt(this.state.numberOfSeats),
      lat: parseFloat(this.state.lat),
      lng: parseFloat(this.state.lng)
    });
  },

  _handleDescChange(e){
    this.setState({description: e.target.value});
  },

  _handleSeatsChange(e){
    this.setState({numberOfSeats: e.target.value});
  },

  _handleLatChange(e){
    this.setState({lat: e.target.value});
  },

  _handleLngChange(e){
    this.setState({lng: e.target.value});
  },

  render(){
    return(
      <div>
        <form>
          <label>Description:
          <input id="bench[description]"
            onChange={this._handleDescChange}
            value={this.state.description} /></label>
          <br />

          <label>Number of Seats:
          <input id="bench[numberOfSeats]"
            onChange={this._handleSeatsChange}
            value={this.state.numberOfSeats} /></label>
          <br />

          <label>Latitude:
          <input id="bench[lat]"
            onChange={this._handleLatChange}
            value={this.state.lat} disabled /></label>
          <br />
          
          <label>Longitude:
          <input id="bench[lng]"
            onChange={this._handleLngChange}
            value={this.state.lng} disabled /></label>
          <br />

          <button onClick={this._handleSubmit}>submit</button>
        </form>
      </div>
    );
  }
});

module.exports = BenchForm;
