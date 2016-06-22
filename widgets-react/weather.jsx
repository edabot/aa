const React = require('react');


const Weather = React.createClass({
  getInitialState(){
    return {
      location: "",
      weather: ""
    };
  },
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(function (pos) {
      this.setState({location: pos.coords}, this.getWeather);
    }.bind(this));
  },
  getWeather(){
    var request = new XMLHttpRequest();
    let latLong = `lat=${this.state.location.latitude}&lon=${this.state.location.longitude}`;
    let key = "645c5d39c7603f17e23fcaffcea1a3c1";
    let baseUri = "http://api.openweathermap.org/data/2.5/weather?";
    let uri =  baseUri + latLong + "&appid=" + key;

    request.open('GET', uri, true);

    request.onload = function() {
      var resp = request.responseText;

      if (request.status >= 200 && request.status < 400) {
        this.setState({weather: JSON.parse(resp)});
      } else {
        console.log(resp);
      }
    }.bind(this);

    request.onerror = function() {
      console.log("never made it");
    };

    request.send();
  },
  componentWillUnmount (){

  },
  render(){
    let location = this.state.location.longitude + " " + this.state.location.latitude;
    let weatherInfo = "loading";
    if (this.state.weather !== "") {
      weatherInfo =
        <div>
          Weather for {this.state.weather.name}
          <ul>
            <li>
              Conditions: {this.state.weather.weather[0].description}
            </li>
            <li>
              High {this.state.weather.main.temp_max}
            </li>
            <li>
              Low {this.state.weather.main.temp_min}
            </li>
          </ul>
        </div>;
    }
    return (
      <div>
        I am weather. Whoosh, shine.
        {weatherInfo}
      </div>
      );
  }
});

module.exports = Weather;
