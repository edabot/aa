const React = require('react');
const Clock = require('./clock');
const Weather = require('./weather');

const WeatherClock = React.createClass({
  render(){
    return (
      <div>
        <Clock />
        <Weather />
      </div>
      );
  }
});

module.exports = WeatherClock;
